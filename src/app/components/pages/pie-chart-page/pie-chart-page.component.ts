import { Component } from '@angular/core';

import { PieChartComponent } from 'components/common/pie-chart/pie-chart.component';

@Component({
  selector: 'app-pie-chart-page',
  imports: [
    PieChartComponent
  ],
  templateUrl: './pie-chart-page.component.html',
  styleUrl: './pie-chart-page.component.scss'
})
export class PieChartPageComponent {

}
