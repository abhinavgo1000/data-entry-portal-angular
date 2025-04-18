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
