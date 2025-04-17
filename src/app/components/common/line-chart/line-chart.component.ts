import { Component, OnInit, ElementRef } from '@angular/core';

import { ChartRenderUtil } from 'utils';

@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {

  public chart: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.createLineChart();
  }

  createLineChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);

    const lineChartData = {
      labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                               '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
         datasets: [
        {
          label: "Sales",
          data: ['467','576', '572', '79', '92',
                               '574', '573', '576'],
          backgroundColor: 'blue'
        },
        {
          label: "Profit",
          data: ['542', '542', '536', '327', '17',
                                   '0.00', '538', '541'],
          backgroundColor: 'limegreen'
        }  
      ]
    };

    const lineChartOptions = {
      aspectRatio:2.5
    };
    
    this.chart = ChartRenderUtil.renderLineChart(htmlRef, lineChartData, lineChartOptions);
  }
}
