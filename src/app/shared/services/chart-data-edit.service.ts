import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ChartFormData } from '../interfaces/chart-form-data';

@Injectable({
  providedIn: 'root'
})
export class ChartDataEditService {

  readonly apiUrl = 'http://localhost:5000/api/form/update-form-data'; 

  constructor(private http: HttpClient) { }

  updateChartData(formData: ChartFormData): Observable<ChartFormData> {
    return this.http.put<ChartFormData>(`${this.apiUrl}/${formData._id}`, formData).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error updating chart data', error);
        throw error;
      })
    );
  }
}
