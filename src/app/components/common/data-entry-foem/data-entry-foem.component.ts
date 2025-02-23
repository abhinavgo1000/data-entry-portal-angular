import { Component, OnInit } from '@angular/core';
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
import { MatButtonModule } from '@angular/material/button';

import { FormDataEntryService } from '../../../shared/services/form-data-entry.service';

export class FormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-data-entry-foem',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './data-entry-foem.component.html',
  styleUrl: './data-entry-foem.component.scss'
})
export class DataEntryFoemComponent implements OnInit {

  submitText = 'Submit';

  dataEntryForm!: FormGroup;

  idControl = new FormControl('', Validators.required);
  nameControl = new FormControl('', Validators.required);
  telephoneControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  dobControl = new FormControl<string>('', Validators.required);
  addressControl = new FormControl('', Validators.required);
  cityControl = new FormControl('', Validators.required);
  stateControl = new FormControl('', Validators.required);
  zipControl = new FormControl('', Validators.required);
  countryControl = new FormControl('', Validators.required);

  constructor(private formDataEntryService: FormDataEntryService) { }

  ngOnInit(): void {
    this.dataEntryForm = new FormGroup({
      id: this.idControl,
      name: this.nameControl,
      telephone: this.telephoneControl,
      dateOfBirth: this.dobControl,
      email: this.emailControl,
      address: this.addressControl,
      city: this.cityControl,
      state: this.stateControl,
      zip: this.zipControl,
      country: this.countryControl
    });
  }

  onFormSubmit(): void {
    this.formDataEntryService.submitFormData(this.dataEntryForm.value);
  }
}
