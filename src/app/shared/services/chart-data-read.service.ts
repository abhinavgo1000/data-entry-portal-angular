import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartFormData } from '../interfaces/chart-form-data';

@Injectable({
  providedIn: 'root'
})
export class ChartDataReadService {

  constructor(http: HttpClient) { }

  fetchChartData(data: ChartFormData) {
    // Code to fetch chart data from the server will go here
  }
}
