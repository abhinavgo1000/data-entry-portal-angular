import { Component, Injectable, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageEvent, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ChartDataReadService, ChartDataDeleteService } from 'services';
import { ChartFormData } from 'interfaces';
import { DateFormatterPipe, TelephoneFormatterPipe } from 'pipes';
import { DataAlertDialogComponent } from 'components/common/data-alert-dialog/data-alert-dialog.component';

@Injectable()
export class PaginatorIntl extends MatPaginatorIntl {
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    return `Page ${page + 1} of ${Math.ceil(length/pageSize)}`
  }
}

@Component({
  selector: 'app-data-card-list',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    DateFormatterPipe,
    TelephoneFormatterPipe
  ],
  providers: [
    DatePipe, 
    { provide: MatPaginatorIntl, useClass: PaginatorIntl }
  ],
  templateUrl: './data-card-list.component.html',
  styleUrl: './data-card-list.component.scss'
})
export class DataCardListComponent implements OnInit {

  cardsData: ChartFormData[] = [];
  paginatedCards: ChartFormData[] = [];

  length = this.cardsData.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  

  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private _chartService: ChartDataReadService,
    private _deleteService: ChartDataDeleteService) { }

  ngOnInit(): void {
    this._chartService.fetchChartData().subscribe((data: ChartFormData[]) => {
      this.cardsData = data;
      this.length = data.length;
      this.updatePaginatedCards();
    });
  }

  onCardEdit(card: ChartFormData): void {
    this._router.navigate(['/edit-form'], { queryParams: { id: card._id } });
  }

  onCardDelete(card: ChartFormData): void {
    const dialogRef = this._dialog.open(DataAlertDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Deletion',
        message: `Are you sure you want to delete the item "${card.productName}"?`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
      if (result) {
        // User confirmed deletion
        this._deleteService.deleteChartData(card._id).subscribe(() => {
          this.cardsData = this.cardsData.filter((item) => item._id !== card._id);
          this.updatePaginatedCards();
        });
      }
    });
  }

  updatePaginatedCards(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCards = this.cardsData.slice(startIndex, endIndex);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.updatePaginatedCards();
  }
}
