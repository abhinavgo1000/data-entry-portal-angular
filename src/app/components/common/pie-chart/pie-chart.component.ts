import { Component, OnInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

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
    let htmlRef = this.elementRef.nativeElement.querySelector(`#pieChart`);
    this.chart = new Chart(htmlRef, {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
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
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}
