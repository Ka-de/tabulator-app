import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneRowComponent } from './clone-row.component';

describe('CloneRowComponent', () => {
  let component: CloneRowComponent;
  let fixture: ComponentFixture<CloneRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
