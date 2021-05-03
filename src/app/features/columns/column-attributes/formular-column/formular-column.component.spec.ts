import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularColumnComponent } from './formular-column.component';

describe('FormularColumnComponent', () => {
  let component: FormularColumnComponent;
  let fixture: ComponentFixture<FormularColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
