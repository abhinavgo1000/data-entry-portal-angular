import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ChartFormData } from '../interfaces/chart-form-data';

@Injectable({
  providedIn: 'root'
})
export class ChartDataReadService {

  readonly apiUrl = 'http://localhost:5000/api/form/fetch-form-data'; 

  constructor(private http: HttpClient) { }

  fetchChartData(): Observable<ChartFormData> {
    return this.http.get<ChartFormData>(this.apiUrl).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching chart data', error);
        throw error;
      })
    );
  }
}
