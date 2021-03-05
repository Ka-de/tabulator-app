import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyColumnComponent } from './money-column.component';

describe('MoneyColumnComponent', () => {
  let component: MoneyColumnComponent;
  let fixture: ComponentFixture<MoneyColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
