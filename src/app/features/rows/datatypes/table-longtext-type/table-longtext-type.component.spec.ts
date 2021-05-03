import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLongtextTypeComponent } from './table-longtext-type.component';

describe('TableLongtextTypeComponent', () => {
  let component: TableLongtextTypeComponent;
  let fixture: ComponentFixture<TableLongtextTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLongtextTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLongtextTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
