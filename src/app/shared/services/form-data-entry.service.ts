import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ChartFormData } from '../interfaces/chart-form-data';

@Injectable({
  providedIn: 'root'
})
export class FormDataEntryService {

  readonly apiUrl = 'http://localhost:5000/api/form/write-form-data'; 

  constructor(private http: HttpClient) { }

  submitFormData(formData: ChartFormData): Observable<ChartFormData> {
    return this.http.post<ChartFormData>(this.apiUrl, formData).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error submitting form data', error);
        throw error;
      })
    );
  }
}
