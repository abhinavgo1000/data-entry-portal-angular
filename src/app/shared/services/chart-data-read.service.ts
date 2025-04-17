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
  readonly apiUrlAll = 'http://localhost:5000/api/form/fetch-all-data';

  constructor(private http: HttpClient) { }

  fetchChartData(page: number, pageSize: number): Observable<{ totalDocuments: number; totalPages: number; currentPage: number; data: ChartFormData[] }> {
    const params = { page: page.toString(), limit: pageSize.toString() };
    return this.http.get<{ totalDocuments: number; totalPages: number; currentPage: number; data: ChartFormData[] }>(this.apiUrl, { params }).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching paginated chart data', error);
        throw error;
      })
    );
  }

  fetchChartDataById(id: string): Observable<ChartFormData> {
    return this.http.get<ChartFormData>(`${this.apiUrl}/${id}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching chart data by ID', error);
        throw error;
      })
    );
  }

  fetchAllChartData(): Observable<ChartFormData[]> {
    return this.http.get<ChartFormData[]>(this.apiUrlAll).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching all chart data', error);
        throw error;
      })
    );
  }
}
