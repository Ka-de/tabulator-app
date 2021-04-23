import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtextCellComponent } from './longtext-cell.component';

describe('LongtextCellComponent', () => {
  let component: LongtextCellComponent;
  let fixture: ComponentFixture<LongtextCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongtextCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongtextCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
