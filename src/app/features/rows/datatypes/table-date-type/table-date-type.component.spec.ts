import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDateTypeComponent } from './table-date-type.component';

describe('TableDateTypeComponent', () => {
  let component: TableDateTypeComponent;
  let fixture: ComponentFixture<TableDateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDateTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
