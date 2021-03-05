import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtextColumnComponent } from './longtext-column.component';

describe('LongtextColumnComponent', () => {
  let component: LongtextColumnComponent;
  let fixture: ComponentFixture<LongtextColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongtextColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongtextColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
