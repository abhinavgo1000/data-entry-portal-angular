import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ChartFormData } from 'interfaces';
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FormDataEntryService {

  readonly apiUrl = `${environment.apiBaseUrl}/api/form/write-form-data`; 

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
