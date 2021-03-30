import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectTypeComponent } from './table-select-type.component';

describe('TableSelectTypeComponent', () => {
  let component: TableSelectTypeComponent;
  let fixture: ComponentFixture<TableSelectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSelectTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
