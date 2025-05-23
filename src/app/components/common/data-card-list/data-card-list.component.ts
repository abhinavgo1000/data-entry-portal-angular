import { ChangeDetectorRef, Component, Injectable, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageEvent, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ChartFormData, SortModel } from 'interfaces';
import { DateFormatterPipe, TelephoneFormatterPipe } from 'pipes';
import { SortOptions } from 'enums';
import { ListSortFilterComponent } from 'components/common/list-sort-filter/list-sort-filter.component';
import { DataAlertDialogComponent } from 'components/common/data-alert-dialog/data-alert-dialog.component';
import * as FormDataActions from 'state/actions/form-data.actions';
import { selectPaginatedFormData, selectTotalDocuments, selectLoading } from 'state/selectors/form-data.selectors';

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
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    DateFormatterPipe,
    TelephoneFormatterPipe,
    ListSortFilterComponent
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

  cardsData$: Observable<ChartFormData[]>;
  totalDocuments$: Observable<number>;
  loading$: Observable<boolean>;

  private _snackBar = inject(MatSnackBar);

  totalDocuments = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  sortOptions: SortModel[] = [
    { sortBy: 'No Value', sortVal: SortOptions.NoValue },
    { sortBy: 'Name Ascending', sortVal: SortOptions.ByNameAsc },
    { sortBy: 'Name Descending', sortVal: SortOptions.ByNameDesc },
    { sortBy: 'Model Ascending', sortVal: SortOptions.ByModelAsc },
    { sortBy: 'Model Descending', sortVal: SortOptions.ByModelDesc },
    { sortBy: 'Purchase Date Ascending', sortVal: SortOptions.ByPurchaseDateAsc },
    { sortBy: 'Purchase Date Descending', sortVal: SortOptions.ByPurchaseDateDesc }
  ];

  selectedSort: number | null = null;

  private store = inject(Store);

  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private cdr: ChangeDetectorRef) 
    {
      this.cardsData$ = this.store.select(selectPaginatedFormData);
      this.totalDocuments$ = this.store.select(selectTotalDocuments);
      this.loading$ = this.store.select(selectLoading);
    }

  ngOnInit(): void {
    this.fetchData(); // Fetch initial data
  }

  // Fetch data from the API
  fetchData(): void {
    this.store.dispatch(FormDataActions.loadPaginatedFormData({ page: this.pageIndex + 1, pageSize: this.pageSize }));
  }

  onCardEdit(card: ChartFormData): void {
    this._router.navigate(['/edit-form'], { queryParams: { id: card._id } });
  }

  onCardDelete(card: ChartFormData): void {
    const dialogRef = this._dialog.open(DataAlertDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Entry',
        message: `Are you sure you want to delete the item "${card.productName}"?`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed deletion
        this.store.dispatch(FormDataActions.deleteFormData({ id: card._id }));
        this.openSnackBar('Entry deleted successfully!', 'Close', 3000);
        this.cardsData = this.cardsData.filter(
          (item) => item._id !== card._id
        );
      }
    });
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchData(); // Fetch data for the new page
  }

  onSortChange(sort: number | null): void {
    this.selectedSort = sort;
  
    if (!sort) {
      return; // Do nothing if no sort is selected
    }
  
    const sortedData = [...this.cardsData]; // Create a copy of the array to avoid mutating the original data
  
    sortedData.sort((a, b) => {
      switch (sort) {
        case SortOptions.ByNameAsc:
          return a.productName.localeCompare(b.productName);
        case SortOptions.ByNameDesc:
          return b.productName.localeCompare(a.productName);
        case SortOptions.ByModelAsc:
          return a.productModel.localeCompare(b.productModel);
        case SortOptions.ByModelDesc:
          return b.productModel.localeCompare(a.productModel);
        case SortOptions.ByPurchaseDateAsc:
          return (a.productPurchaseDate ? new Date(a.productPurchaseDate).getTime() : 0) -
                 (b.productPurchaseDate ? new Date(b.productPurchaseDate).getTime() : 0);
        case SortOptions.ByPurchaseDateDesc:
          return (b.productPurchaseDate ? new Date(b.productPurchaseDate).getTime() : 0) -
                 (a.productPurchaseDate ? new Date(a.productPurchaseDate).getTime() : 0);
        default:
          return 0; // Default return value for unhandled cases
      }
    });
  
    this.cardsData = sortedData; // Assign the sorted data back to `cardsData`
    this.cdr.detectChanges(); 
  }

  onFilterChange(filterValue: string): void {

    this.cardsData = this.cardsData.filter((item) => {
      return (
        item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.productName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.productModel.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.productPrice?.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
        item.productPurchaseDate?.toString().toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  }

  clearSort() {
    this.selectedSort = null;
    this.sortOptions.forEach((option) => {
      option.sortVal = SortOptions.NoValue;
    });
    this.fetchData(); // Fetch data for the new page 
    this.cdr.detectChanges(); // Trigger change detection to update the view
  }

  openSnackBar(message: string, action: string, duration: number): void {
    this._snackBar.open(message, action, {
      duration: duration
    });
  }
}
