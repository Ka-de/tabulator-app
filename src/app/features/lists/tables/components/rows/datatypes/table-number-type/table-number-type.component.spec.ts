import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNumberTypeComponent } from './table-number-type.component';

describe('TableNumberTypeComponent', () => {
  let component: TableNumberTypeComponent;
  let fixture: ComponentFixture<TableNumberTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNumberTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNumberTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
