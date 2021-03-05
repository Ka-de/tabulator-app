import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBooleanTypeComponent } from './table-boolean-type.component';

describe('TableBooleanTypeComponent', () => {
  let component: TableBooleanTypeComponent;
  let fixture: ComponentFixture<TableBooleanTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBooleanTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBooleanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
