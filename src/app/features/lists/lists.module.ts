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
import { TableTextTypeComponent } from './tables/components/rows/datatypes/table-text-type/table-text-type.component';
import { TableLongtextTypeComponent } from './tables/components/rows/datatypes/table-longtext-type/table-longtext-type.component';
import { TableNumberTypeComponent } from './tables/components/rows/datatypes/table-number-type/table-number-type.component';
import { TableDateTypeComponent } from './tables/components/rows/datatypes/table-date-type/table-date-type.component';
import { TableTimeTypeComponent } from './tables/components/rows/datatypes/table-time-type/table-time-type.component';
import { TableDatetimeTypeComponent } from './tables/components/rows/datatypes/table-datetime-type/table-datetime-type.component';
import { TableBooleanTypeComponent } from './tables/components/rows/datatypes/table-boolean-type/table-boolean-type.component';
import { TableMoneyTypeComponent } from './tables/components/rows/datatypes/table-money-type/table-money-type.component';
import { TableUrlTypeComponent } from './tables/components/rows/datatypes/table-url-type/table-url-type.component';
import { ColumnAttributesComponent } from './tables/components/columns/column-attributes/column-attributes.component';
import { ChoiceColumnComponent } from './tables/components/columns/column-attributes/choice-column/choice-column.component';
import { MoneyColumnComponent } from './tables/components/columns/column-attributes/money-column/money-column.component';
import { LookupColumnComponent } from './tables/components/columns/column-attributes/lookup-column/lookup-column.component';
import { TableColumnComponent } from './tables/components/columns/column-attributes/table-column/table-column.component';
import { FormularColumnComponent } from './tables/components/columns/column-attributes/formular-column/formular-column.component';
import { AttributesColumnComponent } from './tables/components/columns/column-attributes/attributes-column/attributes-column.component';
import { DatatypesComponent } from './tables/components/rows/datatypes/datatypes.component';
import { LongtextColumnComponent } from './tables/components/columns/column-attributes/longtext-column/longtext-column.component';
import { TableResolver } from './tables/tables.resolver';

const routes: Routes = [
  {
    path: '', component: ListsComponent, children: [
      { path: 'tables/all', component: TablesComponent },
      { path: 'tables/:id', component: TableSingleComponent, resolve: { data: TableResolver } },
      { path: 'tables', pathMatch: 'full', redirectTo: 'tables/all' },
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    ListsComponent,
    TablesComponent,
    TableSingleComponent,
    CreateColumnComponent,
    TableEditComponent,
    TableCreateComponent,
    TableDeleteComponent,
    EditColumnComponent,
    DeleteColumnComponent,
    DeleteRowComponent,
    EditRowComponent,
    CreateRowComponent,
    TableTextTypeComponent,
    TableLongtextTypeComponent,
    TableNumberTypeComponent,
    TableDateTypeComponent,
    TableTimeTypeComponent,
    TableDatetimeTypeComponent,
    TableBooleanTypeComponent,
    TableMoneyTypeComponent,
    TableUrlTypeComponent,
    ColumnAttributesComponent,
    ChoiceColumnComponent,
    MoneyColumnComponent,
    LookupColumnComponent,
    TableColumnComponent,
    FormularColumnComponent,
    AttributesColumnComponent,
    DatatypesComponent,
    LongtextColumnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ListsModule { }
