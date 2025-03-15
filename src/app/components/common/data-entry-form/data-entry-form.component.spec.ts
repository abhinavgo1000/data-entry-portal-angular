import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryFoemComponent } from './data-entry-foem.component';

describe('DataEntryFoemComponent', () => {
  let component: DataEntryFoemComponent;
  let fixture: ComponentFixture<DataEntryFoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryFoemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryFoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
