import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableImageTypeComponent } from './table-image-type.component';

describe('TableImageTypeComponent', () => {
  let component: TableImageTypeComponent;
  let fixture: ComponentFixture<TableImageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableImageTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableImageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
