import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatetimeTypeComponent } from './table-datetime-type.component';

describe('TableDatetimeTypeComponent', () => {
  let component: TableDatetimeTypeComponent;
  let fixture: ComponentFixture<TableDatetimeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDatetimeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDatetimeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
