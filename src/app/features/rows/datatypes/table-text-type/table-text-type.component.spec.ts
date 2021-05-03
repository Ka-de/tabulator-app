import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTextTypeComponent } from './table-text-type.component';

describe('TableTextTypeComponent', () => {
  let component: TableTextTypeComponent;
  let fixture: ComponentFixture<TableTextTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTextTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTextTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
