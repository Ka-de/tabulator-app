import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
  { path: 'authentications', loadChildren: () => import('@app/features/authentications/authentications.module').then(m => m.AuthenticationsModule) },
  { path: 'lists', loadChildren: () => import('@app/features/lists/lists.module').then(m => m.ListsModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
