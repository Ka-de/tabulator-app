import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '@app/features/popup';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';
import { TableRow } from '@app/features/lists/tables/models/tables-rows.model';
import { Table, TableDataTypes } from '@app/features/lists/tables/models/tables.model';
import { GetTable } from '@app/features/lists/tables/tables-store/tables.action';
import { selectCurrentTable } from '@app/features/lists/tables/tables-store/tables.selector';
import { CreateColumnComponent } from '../columns/create-column/create-column.component';
import { EditColumnComponent } from '../columns/edit-column/edit-column.component';
import { DeleteColumnComponent } from '../columns/delete-column/delete-column.component';
import { EditRowComponent } from '../rows/edit-row/edit-row.component';
import { CreateRowComponent } from '../rows/create-row/create-row.component';
import { DeleteRowComponent } from '../rows/delete-row/delete-row.component';
import { dataSize } from '@app/utils/object.size';
import { TableRowDTO } from '../../dtos/tables-row.dto';
import { CloneColumnComponent } from '../columns/clone-column/clone-column.component';
import { CloneRowComponent } from '../rows/clone-row/clone-row.component';

@Component({
  selector: 'app-table-single',
  templateUrl: './table-single.component.html',
  styleUrls: ['./table-single.component.scss']
})
export class TableSingleComponent implements OnInit {
  subscriptions = new Subscription();
  table!: Table;
  rows!: any[];
  dataSize = dataSize;

  selectedColumn!: TableColumn | undefined;
  selectedRow!: TableRow | undefined;
  displayColumnOptions = false;
  displayRowOptions = false;

  createColumn = CreateColumnComponent;
  editColumn = EditColumnComponent;
  cloneColumn = CloneColumnComponent;
  deleteColumn = DeleteColumnComponent;
  createRow = CreateRowComponent;
  editRow = EditRowComponent;
  cloneRow = CloneRowComponent;
  deleteRow = DeleteRowComponent;

  get tableData() {
    return { table: this.table }
  }

  constructor(
    private store: Store<AppState>,
    public popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.select(selectCurrentTable).subscribe(
        table => {
          if (table) {
            this.table = table;
            this.rows = this.table.rows;
          }
        }
      )
    )
  }

  showColumnOptions(column: TableColumn) {
    return (this.selectedColumn && this.displayColumnOptions)
      ? this.selectedColumn._id == column._id
      : false;
  }

  showRowOptions(row: TableRow) {
    return (this.selectedRow && this.displayRowOptions)
      ? this.selectedRow.r_id == row.r_id
      : false;
  }

  displayCell(data: any, column: TableColumn) {
    if (data) {
      if (column.datatype == TableDataTypes.MONEY) {
        return data.amount;
      }
      else if (column.datatype == TableDataTypes.SELECT && column.attributes?.multiple) {
        if (Array.isArray(data)) {
          return `[${data.join(', ')}]`
        }
      }
    }
    return data;
  }

  sort(column: TableColumn) {
    this.rows = JSON.parse(JSON.stringify(this.rows))
      .sort((a: any, b: any) => {
        return (a)[column.name] < b[column.name] ? 1 : -1;
      });
  }
}