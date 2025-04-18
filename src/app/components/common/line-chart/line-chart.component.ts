import { Component, OnInit, ElementRef } from '@angular/core';

import { ChartDataReadService } from 'services';
import { ChartFormData } from 'interfaces';
import { ChartRenderUtil } from 'utils';

@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {

  public chartData: ChartFormData[] = [];

  public chart: any;

  constructor(
    private elementRef: ElementRef,
    private chartDataReadService: ChartDataReadService
  ) { }

  ngOnInit(): void {
    this.chartDataReadService.fetchAllChartData().subscribe(
      (data: ChartFormData[]) => {
        this.chartData = data;
        this.createLineChart();
      },
      (error) => {
        console.error('Error fetching chart data', error);
      }
    );
  }

  createLineChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);

    const labels = this.chartData.map(item => item.productName); // Use product names as labels
    const salesData = this.chartData.map(item => item.productPrice); // Use product prices as sales data
    const profitData = this.chartData.map(item => item.productPrice * 0.2); // Example: Calculate profit as 20% of price

    const lineChartData = {
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

    const lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    };
    
    this.chart = ChartRenderUtil.renderLineChart(htmlRef, lineChartData, lineChartOptions);
  }
}
