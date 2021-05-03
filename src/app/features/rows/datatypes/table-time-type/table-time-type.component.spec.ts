import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTimeTypeComponent } from './table-time-type.component';

describe('TableTimeTypeComponent', () => {
  let component: TableTimeTypeComponent;
  let fixture: ComponentFixture<TableTimeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTimeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTimeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
