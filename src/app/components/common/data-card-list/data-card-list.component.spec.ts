import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardListComponent } from './data-card-list.component';

describe('DataCardListComponent', () => {
  let component: DataCardListComponent;
  let fixture: ComponentFixture<DataCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
