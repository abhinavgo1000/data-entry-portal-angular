import { Component } from '@angular/core';

import { BarChartComponent } from 'components/common/bar-chart/bar-chart.component';

@Component({
  selector: 'app-bar-chart-page',
  imports: [
    BarChartComponent
  ],
  templateUrl: './bar-chart-page.component.html',
  styleUrl: './bar-chart-page.component.scss'
})
export class BarChartPageComponent {

}
