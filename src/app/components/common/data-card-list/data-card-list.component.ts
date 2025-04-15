import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ChartDataReadService, ChartDataDeleteService } from 'services';
import { ChartFormData } from 'interfaces';
import { DateFormatterPipe, TelephoneFormatterPipe } from 'pipes';

@Component({
  selector: 'app-data-card-list',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DateFormatterPipe,
    TelephoneFormatterPipe
  ],
  providers: [DatePipe],
  templateUrl: './data-card-list.component.html',
  styleUrl: './data-card-list.component.scss'
})
export class DataCardListComponent implements OnInit {

  cardsData: ChartFormData[] = [];

  constructor(
    private _router: Router,
    private _chartService: ChartDataReadService,
    private _deleteService: ChartDataDeleteService) { }

  ngOnInit(): void {
    this._chartService.fetchChartData().subscribe((data: ChartFormData[]) => {
      this.cardsData = data;
    });
  }

  onCardEdit(card: ChartFormData): void {
    this._router.navigate(['/edit-form'], { queryParams: { id: card._id } });
  }

  onCardDelete(card: ChartFormData) {
    this._deleteService.deleteChartData(card._id).subscribe(() => {
      this.cardsData = this.cardsData.filter(item => item._id !== card._id);
    });
  }
}
