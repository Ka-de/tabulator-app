import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMoneyTypeComponent } from './table-money-type.component';

describe('TableMoneyTypeComponent', () => {
  let component: TableMoneyTypeComponent;
  let fixture: ComponentFixture<TableMoneyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMoneyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMoneyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
