import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ChartDataReadService } from '../../../shared/services/chart-data-read.service';
import { ChartFormData } from '../../../shared/interfaces/chart-form-data';
import { DateFormatterPipe } from '../../../shared/pipes/date-formatter.pipe';

@Component({
  selector: 'app-data-card-list',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DateFormatterPipe
  ],
  providers: [DatePipe],
  templateUrl: './data-card-list.component.html',
  styleUrl: './data-card-list.component.scss'
})
export class DataCardListComponent implements OnInit {

  cardsData: ChartFormData[] = [];

  constructor(
    private _router: Router,
    private _chartService: ChartDataReadService) { }

  ngOnInit(): void {
    this._chartService.fetchChartData().subscribe((data: ChartFormData[]) => {
      this.cardsData = data;
    });
  }

  onCardEdit(card: ChartFormData): void {
    this._router.navigate(['/form'], { queryParams: { id: card._id } });
  }

  onCardDelete(card: ChartFormData) {
    this._router.navigate(['/form'], { queryParams: { id: card._id } });
  }
}
