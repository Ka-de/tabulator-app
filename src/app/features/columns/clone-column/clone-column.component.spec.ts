import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneColumnComponent } from './clone-column.component';

describe('CloneColumnComponent', () => {
  let component: CloneColumnComponent;
  let fixture: ComponentFixture<CloneColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
