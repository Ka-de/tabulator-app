import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCellComponent } from './url-cell.component';

describe('UrlCellComponent', () => {
  let component: UrlCellComponent;
  let fixture: ComponentFixture<UrlCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
