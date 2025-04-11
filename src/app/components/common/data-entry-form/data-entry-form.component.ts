import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import { FormDataEntryService } from '../../../shared/services/form-data-entry.service';

export class FormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-data-entry-form',
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './data-entry-form.component.html',
  styleUrl: './data-entry-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataEntryFormComponent implements OnInit {

  submitText = 'Submit';

  dataEntryForm!: FormGroup;

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
  productPriceControl = new FormControl('', Validators.required);
  productModelControl = new FormControl('', Validators.required);
  productPurchaseDateControl = new FormControl<Date | null>(null, Validators.required);

  constructor(private formDataEntryService: FormDataEntryService) { }

  ngOnInit(): void {
    this.dataEntryForm = new FormGroup({
      name: this.nameControl,
      telephone: this.telephoneControl,
      dateOfBirth: this.dobControl,
      email: this.emailControl,
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

  onFormSubmit(): void {
    this.formDataEntryService.submitFormData(this.dataEntryForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error submitting form', error);
      }
    );
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

  resetForm(): void {
    this.dataEntryForm.reset();
    this.nameError.set('');
    this.telephoneError.set('');
    this.emailError.set('');
    this.dobError.set('');
    this.addressError.set('');
    this.cityError.set('');
    this.stateError.set('');
    this.zipCodeError.set('');
    this.countryError.set('');
    this.productNameError.set('');
    this.productTypeError.set('');
    this.productCategoryError.set('');
    this.productBrandError.set('');
    this.productPriceError.set('');
    this.productModelError.set('');
    this.productPurchaseDateError.set('');
  }
  onSubmit(): void {
    if (this.dataEntryForm.valid) {
      this.onFormSubmit();
    } else {
      this.updateErrorMessage();
    }
  }
}
