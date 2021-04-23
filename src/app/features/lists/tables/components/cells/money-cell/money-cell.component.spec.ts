import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCellComponent } from './money-cell.component';

describe('MoneyCellComponent', () => {
  let component: MoneyCellComponent;
  let fixture: ComponentFixture<MoneyCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
