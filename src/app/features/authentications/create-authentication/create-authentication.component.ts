import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { copyElementText } from '@app/utils/shared/copy.utils';
import { Authentication, AuthenticationDTO } from '../authentications.model';
import { AuthenticationService } from '../authentications.service';

@Component({
  selector: 'app-create-authentication',
  templateUrl: './create-authentication.component.html',
  styleUrls: ['./create-authentication.component.scss']
})
export class CreateAuthenticationComponent implements OnInit {
  createAuthenticationForm!: FormGroup;
  createdAuthentication!: Authentication;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.createAuthenticationForm = this.fb.group({
      email: ['mail@mail.com', [Validators.required]]
    });
  }

  create() {
    const data: AuthenticationDTO = this.createAuthenticationForm.getRawValue();
    this.authenticationService.create(data).subscribe((authentication) => {
      this.createdAuthentication = authentication;
    });
  }

  copyKey(element: HTMLInputElement) {
    const text = copyElementText(element);
    console.log(text)
  }
}

