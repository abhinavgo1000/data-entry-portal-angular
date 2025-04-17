import { Component, OnInit, ElementRef } from '@angular/core';

import { ChartDataReadService } from 'services';
import { ChartFormData } from 'interfaces';
import { ChartRenderUtil } from 'utils';

@Component({
  selector: 'app-pie-chart',
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {

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
      }
    );
    this.createPieChart();
  }

  createPieChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#pieChart`);

    // Group data by productBrand and calculate the count for each brand
    const brandCounts = this.chartData.reduce((acc, item) => {
      acc[item.productBrand] = (acc[item.productBrand] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    // Extract labels (productBrand names) and data (counts)
    const labels = Object.keys(brandCounts);
    const data = Object.values(brandCounts);

    const pieChartData = {
      labels: labels,
        datasets: [{
          label: 'Number of Items',
          data: data,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'          
          ],
          hoverOffset: 4
        }],
    };

    const pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
    
    this.chart = ChartRenderUtil.renderPieChart(htmlRef, pieChartData, pieChartOptions);
  }
}
