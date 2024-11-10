import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChartPageComponent } from './data-chart-page.component';

describe('DataChartPageComponent', () => {
  let component: DataChartPageComponent;
  let fixture: ComponentFixture<DataChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataChartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
