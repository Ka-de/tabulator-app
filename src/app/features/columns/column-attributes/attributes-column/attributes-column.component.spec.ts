import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesColumnComponent } from './attributes-column.component';

describe('AttributesColumnComponent', () => {
  let component: AttributesColumnComponent;
  let fixture: ComponentFixture<AttributesColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
