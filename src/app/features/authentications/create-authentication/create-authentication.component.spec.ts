import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthenticationComponent } from './create-authentication.component';

describe('CreateAuthenticationComponent', () => {
  let component: CreateAuthenticationComponent;
  let fixture: ComponentFixture<CreateAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
