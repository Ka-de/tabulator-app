import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSingleComponent } from './table-single.component';

describe('TableSingleComponent', () => {
  let component: TableSingleComponent;
  let fixture: ComponentFixture<TableSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
