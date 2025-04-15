import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormPageComponent } from './edit-form-page.component';

describe('EditFormPageComponent', () => {
  let component: EditFormPageComponent;
  let fixture: ComponentFixture<EditFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
