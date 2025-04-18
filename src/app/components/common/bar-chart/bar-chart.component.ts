import { Component, OnInit, ElementRef } from '@angular/core';

import { ChartDataReadService } from 'services';
import { ChartFormData } from 'interfaces';
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
    private chartDataReadService: ChartDataReadService
  ) { }

  ngOnInit(): void {
    this.chartDataReadService.fetchAllChartData().subscribe(
      (data: ChartFormData[]) => {
        this.chartData = data;
        this.createBarChart();
      },
      (error) => {
        console.error('Error fetching chart data', error);
      }
    );
  }

  createBarChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#barChart`);

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
