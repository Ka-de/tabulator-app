import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupColumnComponent } from './lookup-column.component';

describe('LookupColumnComponent', () => {
  let component: LookupColumnComponent;
  let fixture: ComponentFixture<LookupColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
