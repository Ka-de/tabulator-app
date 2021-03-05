import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAttributesComponent } from './column-attributes.component';

describe('ColumnAttributesComponent', () => {
  let component: ColumnAttributesComponent;
  let fixture: ComponentFixture<ColumnAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
