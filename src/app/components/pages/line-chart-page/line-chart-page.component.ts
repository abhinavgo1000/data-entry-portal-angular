import { Component } from '@angular/core';

import { LineChartComponent } from 'components/common/line-chart/line-chart.component';

@Component({
  selector: 'app-line-chart-page',
  imports: [
    LineChartComponent
  ],
  templateUrl: './line-chart-page.component.html',
  styleUrl: './line-chart-page.component.scss'
})
export class LineChartPageComponent {

}
