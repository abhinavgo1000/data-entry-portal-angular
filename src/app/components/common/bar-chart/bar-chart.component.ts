import { Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { ChartFormData } from 'interfaces';
import * as FormDataActions from 'state/actions/form-data.actions';
import { selectAllChartData } from 'state/selectors/form-data.selectors';
import { ChartRenderUtil } from 'utils';

@Component({
  selector: 'app-bar-chart',
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {

  public chartData: ChartFormData[] = [];

  public chart: any;

  constructor(
    private elementRef: ElementRef,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(FormDataActions.fetchAllChartData());
    this.store.select(selectAllChartData).subscribe((data: ChartFormData[]) => {
      this.chartData = data;
      this.createBarChart();
    });
  }

  createBarChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#barChart`);

    if (this.chart) {
      this.chart.destroy();
    }

    const aggregatedData = this.chartData.reduce((acc, item) => {
      if (!acc[item.productName]) {
        acc[item.productName] = { sales: 0, profit: 0 };
      }
      acc[item.productName].sales += item.productPrice;
      acc[item.productName].profit += item.productPrice * 0.2; // Example: Calculate profit as 20% of price
      return acc;
    }, {} as { [key: string]: { sales: number; profit: number } });

    const labels = Object.keys(aggregatedData);
    const salesData = labels.map(label => aggregatedData[label].sales);
    const profitData = labels.map(label => aggregatedData[label].profit);
    
    const barChartData = {
      labels: labels, 
         datasets: [
        {
          label: 'Sales',
          data: salesData,
          backgroundColor: 'blue'
        },
        {
          label: 'Profit',
          data: profitData,
          backgroundColor: 'limegreen'
        }  
      ]
    };

    const barChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    };

    this.chart = ChartRenderUtil.renderBarChart(htmlRef, barChartData, barChartOptions);
  }
}
