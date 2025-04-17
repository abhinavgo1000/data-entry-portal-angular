import { Component, OnInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

import { ChartRenderUtil } from 'utils';

@Component({
  selector: 'app-pie-chart',
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {

  public chart: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#pieChart`);

    const pieChartData = {
      labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240, 100, 432, 253, 34],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',            
          ],
          hoverOffset: 4
        }],
    };

    const pieChartOptions = {
      aspectRatio:2.5
    }
    
    this.chart = ChartRenderUtil.renderPieChart(htmlRef, pieChartData, pieChartOptions);
  }
}
