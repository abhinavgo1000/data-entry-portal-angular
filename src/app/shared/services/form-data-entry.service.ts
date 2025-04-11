import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartFormData } from '../interfaces/chart-form-data';

@Injectable({
  providedIn: 'root'
})
export class FormDataEntryService {

  constructor(http: HttpClient) { }

  submitFormData(formData: ChartFormData) {
    console.log('Form Data:', formData);
    // Here you would typically send the form data to your backend API
  }
}
