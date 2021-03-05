import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceColumnComponent } from './choice-column.component';

describe('ChoiceColumnComponent', () => {
  let component: ChoiceColumnComponent;
  let fixture: ComponentFixture<ChoiceColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
