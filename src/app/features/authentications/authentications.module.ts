import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationsComponent } from './authentications.component';
import { AuthenticationService } from './authentications.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/utils/shared.module';
import { CreateAuthenticationComponent } from './create-authentication/create-authentication.component';

const routes: Routes = [
  { path: 'generate', component: CreateAuthenticationComponent },
  { path: '**', component: AuthenticationsComponent }
]

@NgModule({
  declarations: [
    AuthenticationsComponent,
    CreateAuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationsModule { }
