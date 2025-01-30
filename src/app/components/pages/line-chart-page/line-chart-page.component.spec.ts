import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartPageComponent } from './line-chart-page.component';

describe('LineChartPageComponent', () => {
  let component: LineChartPageComponent;
  let fixture: ComponentFixture<LineChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
