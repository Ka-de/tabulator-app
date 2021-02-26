import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/utils/shared.module';
import { TablesComponent } from '@app/features/lists/tables/tables.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CreateColumnComponent } from '@app/features/lists/tables/components/columns/create-column/create-column.component';
import { TableCreateComponent } from '@app/features/lists/tables/components/table-create/table-create.component';
import { EditColumnComponent } from '@app/features/lists/tables/components/columns/edit-column/edit-column.component';
import { TableDeleteComponent } from '@app/features/lists/tables/components/table-delete/table-delete.component';
import { TableEditComponent } from '@app/features/lists/tables/components/table-edit/table-edit.component';
import { TableSingleComponent } from '@app/features/lists/tables/components/table-single/table-single.component';
import { DeleteColumnComponent } from './tables/components/columns/delete-column/delete-column.component';
import { DeleteRowComponent } from './tables/components/rows/delete-row/delete-row.component';
import { EditRowComponent } from './tables/components/rows/edit-row/edit-row.component';
import { CreateRowComponent } from './tables/components/rows/create-row/create-row.component';

const routes: Routes = [
  { path: 'tables', component: ListsComponent },
  { path: 'tables/:id', component: ListsComponent },
  { path: 'databases', component: ListsComponent },
  { path: 'databases/:id', component: ListsComponent },
  { path: '', redirectTo: '/lists/tables' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [ListsComponent, TablesComponent, TableSingleComponent, CreateColumnComponent, TableEditComponent, TableCreateComponent, TableDeleteComponent, EditColumnComponent, DeleteColumnComponent, DeleteRowComponent, EditRowComponent, CreateRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ListsModule { }
