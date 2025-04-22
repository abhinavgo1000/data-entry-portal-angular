import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ChartFormData } from 'interfaces';
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ChartDataDeleteService {

  readonly apiUrl = `${environment.apiBaseUrl}/api/form/delete-form-data`; 

  constructor(private http: HttpClient) { }

  deleteChartData(id: string): Observable<ChartFormData> {
    return this.http.delete<ChartFormData>(`${this.apiUrl}/${id}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error deleting chart data', error);
        throw error;
      })
    );
  }
}
