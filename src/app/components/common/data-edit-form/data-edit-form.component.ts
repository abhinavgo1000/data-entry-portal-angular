import { Component, OnInit, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ChartFormData } from 'interfaces';
import * as FormDataActions from 'state/actions/form-data.actions';
import { selectChartDataById } from 'state/selectors/form-data.selectors';

export class FormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-data-edit-form',
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './data-edit-form.component.html',
  styleUrl: './data-edit-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataEditFormComponent implements OnInit {

  submitText = 'Update';
  
  dataEditForm: FormGroup;
  cardId: string | null = null;

  private _snackBar = inject(MatSnackBar);

  nameError = signal('');
  telephoneError = signal('');
  emailError = signal('');
  dobError = signal('');
  addressError = signal('');
  cityError = signal('');
  stateError = signal('');
  zipCodeError = signal('');
  countryError = signal('');
  productNameError = signal('');
  productTypeError = signal('');
  productCategoryError = signal('');
  productBrandError = signal('');
  productPriceError = signal('');
  productModelError = signal('');
  productPurchaseDateError = signal('');

  nameControl = new FormControl('', Validators.required);
  telephoneControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  dobControl = new FormControl<Date | null>(null, Validators.required);
  addressControl = new FormControl('', Validators.required);
  cityControl = new FormControl('', Validators.required);
  stateControl = new FormControl('', Validators.required);
  zipCodeControl = new FormControl('', Validators.required);
  countryControl = new FormControl('', Validators.required);
  productNameControl = new FormControl('', Validators.required);
  productTypeControl = new FormControl('', Validators.required);
  productCategoryControl = new FormControl('', Validators.required);
  productBrandControl = new FormControl('', Validators.required);
  productPriceControl = new FormControl(0, Validators.required);
  productModelControl = new FormControl('', Validators.required);
  productPurchaseDateControl = new FormControl<Date | null>(null, Validators.required);

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private store: Store
  ) {
    this.dataEditForm = this._fb.group({
      name: this.nameControl,
      telephone: this.telephoneControl,
      email: this.emailControl,
      dateOfBirth: this.dobControl,
      address: this.addressControl,
      city: this.cityControl,
      state: this.stateControl,
      zip: this.zipCodeControl,
      country: this.countryControl,
      productName: this.productNameControl,
      productType: this.productTypeControl,
      productCategory: this.productCategoryControl,
      productBrand: this.productBrandControl,
      productPrice: this.productPriceControl,
      productModel: this.productModelControl,
      productPurchaseDate: this.productPurchaseDateControl,
    });
  }

  ngOnInit(): void {
    this.cardId = this._route.snapshot.queryParamMap.get('id');
    if (this.cardId) {
      this.loadCardData(this.cardId);
    }
  }

  // Fetch the card data and populate the FormControls
  loadCardData(id: string): void {
    this.store.dispatch(FormDataActions.fetchChartDataById({ id }));
    this.store.select(selectChartDataById(id)).subscribe((data) => {
      if (data) {
        this.nameControl.setValue(data.name || '');
        this.telephoneControl.setValue(data.telephone || '');
        this.emailControl.setValue(data.email || '');
        this.dobControl.setValue(data.dateOfBirth ? new Date(data.dateOfBirth) : null);
        this.addressControl.setValue(data.address || '');
        this.cityControl.setValue(data.city || '');
        this.stateControl.setValue(data.state || '');
        this.zipCodeControl.setValue(data.zip || '');
        this.countryControl.setValue(data.country || '');
        this.productNameControl.setValue(data.productName || '');
        this.productTypeControl.setValue(data.productType || '');
        this.productCategoryControl.setValue(data.productCategory || '');
        this.productBrandControl.setValue(data.productBrand || '');
        this.productPriceControl.setValue(data.productPrice || 0);
        this.productModelControl.setValue(data.productModel || '');
        this.productPurchaseDateControl.setValue(data.productPurchaseDate ? new Date(data.productPurchaseDate) : null);
      }
    });
  }

  onSubmit(): void {
    if (this.cardId) {
      const updatedData: ChartFormData = {
        _id: this.cardId,
        name: this.nameControl.value || '',
        telephone: this.telephoneControl.value || '',
        email: this.emailControl.value || '',
        dateOfBirth: this.dobControl.value,
        address: this.addressControl.value || '',
        city: this.cityControl.value || '',
        state: this.stateControl.value || '',
        zip: this.zipCodeControl.value || '',
        country: this.countryControl.value || '',
        productName: this.productNameControl.value || '',
        productType: this.productTypeControl.value || '',
        productCategory: this.productCategoryControl.value || '',
        productBrand: this.productBrandControl.value || '',
        productPrice: this.productPriceControl.value || 0,
        productModel: this.productModelControl.value || '',
        productPurchaseDate: this.productPurchaseDateControl.value,
      };

      this.store.dispatch(FormDataActions.updateFormData({ formData: updatedData }));
      this.openSnackBar('Data updated successfully!', 'Close', 3000);
      this._router.navigate(['/home']); // Navigate back to the list
    }
  }

  updateErrorMessage() {
    if (this.nameControl.hasError('required')) {
      this.nameError.set('You must enter a value');
    } else {
      this.nameError.set('');
    }

    if (this.telephoneControl.hasError('required')) {
      this.telephoneError.set('You must enter a value');
    } else {
      this.telephoneError.set('');
    }

    if (this.emailControl.hasError('required')) {
      this.emailError.set('You must enter a value');
    } else if (this.emailControl.hasError('email')) {
      this.emailError.set('Not a valid email');
    } else {
      this.emailError.set('');
    }

    if (this.dobControl.hasError('required')) {
      this.dobError.set('You must enter a value');
    } else {
      this.dobError.set('');
    }

    if (this.addressControl.hasError('required')) {
      this.addressError.set('You must enter a value');
    } else {
      this.addressError.set('');
    }

    if (this.cityControl.hasError('required')) {
      this.cityError.set('You must enter a value');
    } else {
      this.cityError.set('');
    }

    if (this.stateControl.hasError('required')) {
      this.stateError.set('You must enter a value');
    } else {
      this.stateError.set('');
    }

    if (this.zipCodeControl.hasError('required')) {
      this.zipCodeError.set('You must enter a value');
    } else {
      this.zipCodeError.set('');
    }

    if (this.countryControl.hasError('required')) {
      this.countryError.set('You must enter a value');
    } else {
      this.countryError.set('');
    }

    if (this.productNameControl.hasError('required')) {
      this.productNameError.set('You must enter a value');
    } else {
      this.productNameError.set('');
    }

    if (this.productTypeControl.hasError('required')) {
      this.productTypeError.set('You must enter a value');
    } else {
      this.productTypeError.set('');
    }

    if (this.productCategoryControl.hasError('required')) {
      this.productCategoryError.set('You must enter a value');
    } else {
      this.productCategoryError.set('');
    }

    if (this.productBrandControl.hasError('required')) {
      this.productBrandError.set('You must enter a value');
    } else {
      this.productBrandError.set('');
    }

    if (this.productPriceControl.hasError('required')) {
      this.productPriceError.set('You must enter a value');
    } else {
      this.productPriceError.set('');
    }

    if (this.productModelControl.hasError('required')) {
      this.productModelError.set('You must enter a value');
    } else {
      this.productModelError.set('');
    }

    if (this.productPurchaseDateControl.hasError('required')) {
      this.productPurchaseDateError.set('You must enter a value');
    } else {
      this.productPurchaseDateError.set('');
    }
  }

  openSnackBar(message: string, action: string, duration: number): void {
    this._snackBar.open(message, action, {
      duration: duration
    });
  }
}
