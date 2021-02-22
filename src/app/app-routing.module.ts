import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authentications', loadChildren: () => import('@app/features/authentications/authentications.module').then(m => m.AuthenticationsModule) },
  { path: 'lists', loadChildren: () => import('@app/features/lists/lists.module').then(m => m.ListsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
