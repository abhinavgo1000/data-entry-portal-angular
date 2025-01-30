import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartPageComponent } from './bar-chart-page.component';

describe('BarChartPageComponent', () => {
  let component: BarChartPageComponent;
  let fixture: ComponentFixture<BarChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
