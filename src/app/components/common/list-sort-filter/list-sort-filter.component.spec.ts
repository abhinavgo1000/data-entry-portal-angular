import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSortFilterComponent } from './list-sort-filter.component';

describe('ListSortFilterComponent', () => {
  let component: ListSortFilterComponent;
  let fixture: ComponentFixture<ListSortFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSortFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSortFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
