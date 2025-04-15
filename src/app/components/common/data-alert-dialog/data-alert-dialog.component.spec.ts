import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAlertDialogComponent } from './data-alert-dialog.component';

describe('DataAlertDialogComponent', () => {
  let component: DataAlertDialogComponent;
  let fixture: ComponentFixture<DataAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAlertDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
