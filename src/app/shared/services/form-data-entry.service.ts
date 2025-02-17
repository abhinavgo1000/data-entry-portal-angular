import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartFormData } from '../interfaces/chart-form-data';

@Injectable({
  providedIn: 'root'
})
export class FormDataEntryService {

  constructor(http: HttpClient) { }

  postFormData(formData: ChartFormData) {
    // Code to post form data to the server will go here
  }
}
