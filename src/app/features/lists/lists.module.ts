import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/utils/shared.module';

const routes: Routes = [
  { path: '**', component: ListsComponent }
]

@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ListsModule { }
