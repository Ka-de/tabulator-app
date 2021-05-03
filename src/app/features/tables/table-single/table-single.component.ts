import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table, TableDataTypes } from '@app/features/tables/models/tables.model';
import { selectCurrentTable } from '@app/features/tables/tables-store/tables.selector';
import { dataSize } from '@app/utils/object.size';
import { CreateColumnComponent } from '@app/features/columns/create-column/create-column.component';
import { EditColumnComponent } from '@app/features/columns/edit-column/edit-column.component';
import { CloneColumnComponent } from '@app/features/columns/clone-column/clone-column.component';
import { DeleteColumnComponent } from '@app/features/columns/delete-column/delete-column.component';
import { CreateRowComponent } from '@app/features/rows/create-row/create-row.component';
import { EditRowComponent } from '@app/features/rows/edit-row/edit-row.component';
import { CloneRowComponent } from '@app/features/rows/clone-row/clone-row.component';
import { DeleteRowComponent } from '@app/features/rows/delete-row/delete-row.component';
import { Column } from '@app/features/columns/models/tables-column.model';
import { Row } from '@app/features/rows/models/tables-rows.model';

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

  selectedColumn!: Column | undefined;
  selectedRow!: Row | undefined;
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

  showColumnOptions(column: Column) {
    return (this.selectedColumn && this.displayColumnOptions)
      ? this.selectedColumn._id == column._id
      : false;
  }

  showRowOptions(row: Row) {
    return (this.selectedRow && this.displayRowOptions)
      ? this.selectedRow.r_id == row.r_id
      : false;
  }

  displayCell(data: any, column: Column) {
    if (data) {
      if (column.datatype == TableDataTypes.MONEY) {
        return data.amount;
      }
      else if (column.datatype == TableDataTypes.SELECT && column.attributes?.multiple) {
        if (Array.isArray(data)) {
          return `[${data.join(', ')}]`
        }
      }
      if (column.datatype == TableDataTypes.IMAGE) {
        return data.url;
      }
    }
    return data;
  }

  sort(column: Column) {
    this.rows = JSON.parse(JSON.stringify(this.rows))
      .sort((a: any, b: any) => {
        return (a)[column.name] < b[column.name] ? 1 : -1;
      });
  }
}