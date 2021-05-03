import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUrlTypeComponent } from './table-url-type.component';

describe('TableUrlTypeComponent', () => {
  let component: TableUrlTypeComponent;
  let fixture: ComponentFixture<TableUrlTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUrlTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUrlTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
