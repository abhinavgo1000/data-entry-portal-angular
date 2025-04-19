import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SortModel } from 'interfaces';

@Component({
  selector: 'app-list-sort-filter',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './list-sort-filter.component.html',
  styleUrl: './list-sort-filter.component.scss'
})
export class ListSortFilterComponent {

  @Input() sortOptions: SortModel[] = [];
  @Input() sortLabel: string;
  @Input() filterLabel: string;

  @Output() sortChange = new EventEmitter<number | null>();
  @Output() filterChange = new EventEmitter<string>();

  selectedSort: number | null = null;

  constructor() {
    this.sortLabel = 'Sort By';
    this.filterLabel = 'Filter Entries';
  }

  onSortChange(sort: number) {
    this.selectedSort = sort;
    this.sortChange.emit(sort);
  }

  onFilterChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const value = inputElement?.value || ''; // Safely access the value
    this.filterChange.emit(value); // Emit the filter value
  }

  clearSort() {
    this.selectedSort = null;
    this.sortChange.emit(null);
  }
}
