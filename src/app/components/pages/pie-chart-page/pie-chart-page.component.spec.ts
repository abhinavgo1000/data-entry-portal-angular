import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPageComponent } from './pie-chart-page.component';

describe('PieChartPageComponent', () => {
  let component: PieChartPageComponent;
  let fixture: ComponentFixture<PieChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
