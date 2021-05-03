import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/utils/shared.module';
import { TablesComponent } from '@app/features/tables/tables.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CreateColumnComponent } from '@app/features/columns/create-column/create-column.component';
import { TableCreateComponent } from '@app/features/tables/table-create/table-create.component';
import { EditColumnComponent } from '@app/features/columns/edit-column/edit-column.component';
import { TableDeleteComponent } from '@app/features/tables/table-delete/table-delete.component';
import { TableEditComponent } from '@app/features/tables/table-edit/table-edit.component';
import { TableSingleComponent } from '@app/features/tables/table-single/table-single.component';
import { DeleteColumnComponent } from '@app/features/columns/delete-column/delete-column.component';
import { DeleteRowComponent } from '@app/features/rows/delete-row/delete-row.component';
import { EditRowComponent } from '@app/features/rows/edit-row/edit-row.component';
import { CreateRowComponent } from '@app/features/rows/create-row/create-row.component';
import { TableTextTypeComponent } from '@app/features/rows/datatypes/table-text-type/table-text-type.component';
import { TableLongtextTypeComponent } from '@app/features/rows/datatypes/table-longtext-type/table-longtext-type.component';
import { TableNumberTypeComponent } from '@app/features/rows/datatypes/table-number-type/table-number-type.component';
import { TableDateTypeComponent } from '@app/features/rows/datatypes/table-date-type/table-date-type.component';
import { TableTimeTypeComponent } from '@app/features/rows/datatypes/table-time-type/table-time-type.component';
import { TableDatetimeTypeComponent } from '@app/features/rows/datatypes/table-datetime-type/table-datetime-type.component';
import { TableBooleanTypeComponent } from '@app/features/rows/datatypes/table-boolean-type/table-boolean-type.component';
import { TableMoneyTypeComponent } from '@app/features/rows/datatypes/table-money-type/table-money-type.component';
import { TableUrlTypeComponent } from '@app/features/rows/datatypes/table-url-type/table-url-type.component';
import { ColumnAttributesComponent } from '@app/features/columns/column-attributes/column-attributes.component';
import { MoneyColumnComponent } from '@app/features/columns/column-attributes/money-column/money-column.component';
import { LookupColumnComponent } from '@app/features/columns/column-attributes/lookup-column/lookup-column.component';
import { TableColumnComponent } from '@app/features/columns/column-attributes/table-column/table-column.component';
import { FormularColumnComponent } from '@app/features/columns/column-attributes/formular-column/formular-column.component';
import { AttributesColumnComponent } from '@app/features/columns/column-attributes/attributes-column/attributes-column.component';
import { DatatypesComponent } from '@app/features/rows/datatypes/datatypes.component';
import { LongtextColumnComponent } from '@app/features/columns/column-attributes/longtext-column/longtext-column.component';
import { TableResolver } from '@app/features/tables/tables.resolver';
import { CloneColumnComponent } from '@app/features/columns/clone-column/clone-column.component';
import { CloneRowComponent } from '@app/features/rows/clone-row/clone-row.component';
import { SelectColumnComponent } from '@app/features/columns/column-attributes/select-column/select-column.component';
import { TableSelectTypeComponent } from '@app/features/rows/datatypes/table-select-type/table-select-type.component';
import { TableImageTypeComponent } from '@app/features/rows/datatypes/table-image-type/table-image-type.component';
import { CellsComponent } from '@app/features/cells/cells.component';
import { TextCellComponent } from '@app/features/cells/text-cell/text-cell.component';
import { LongtextCellComponent } from '@app/features/cells/longtext-cell/longtext-cell.component';
import { MoneyCellComponent } from '@app/features/cells/money-cell/money-cell.component';
import { ImageCellComponent } from '@app/features/cells/image-cell/image-cell.component';
import { UrlCellComponent } from '@app/features/cells/url-cell/url-cell.component';
import { TimeCellComponent } from '@app/features/cells/time-cell/time-cell.component';
import { DateCellComponent } from '@app/features/cells/date-cell/date-cell.component';
import { DatetimeCellComponent } from '@app/features/cells/datetime-cell/datetime-cell.component';
import { SelectCellComponent } from '@app/features/cells/select-cell/select-cell.component';
import { NumberCellComponent } from '@app/features/cells/number-cell/number-cell.component';
import { BooleanCellComponent } from '@app/features/cells/boolean-cell/boolean-cell.component';

const routes: Routes = [
  {
    path: '', component: ListsComponent, children: [
      { path: 'tables/all', component: TablesComponent },
      { path: 'tables/:id', component: TableSingleComponent, resolve: { data: TableResolver } },
      { path: 'tables', pathMatch: 'full', redirectTo: 'tables/all' },
      { path: '', pathMatch: 'full', redirectTo: 'tables/all' }
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
    MoneyColumnComponent,
    LookupColumnComponent,
    TableColumnComponent,
    FormularColumnComponent,
    AttributesColumnComponent,
    DatatypesComponent,
    LongtextColumnComponent,
    CloneColumnComponent,
    CloneRowComponent,
    SelectColumnComponent,
    TableSelectTypeComponent,
    TableImageTypeComponent,
    CellsComponent,
    TextCellComponent,
    LongtextCellComponent,
    MoneyCellComponent,
    ImageCellComponent,
    UrlCellComponent,
    TimeCellComponent,
    DateCellComponent,
    DatetimeCellComponent,
    SelectCellComponent,
    NumberCellComponent,
    BooleanCellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ListsModule { }
