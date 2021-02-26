import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '@app/features/popup';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';
import { TableRow } from '@app/features/lists/tables/models/tables-rows.model';
import { Table } from '@app/features/lists/tables/models/tables.model';
import { GetTable } from '@app/features/lists/tables/tables-store/tables.action';
import { selectCurrentTable } from '@app/features/lists/tables/tables-store/tables.selector';

@Component({
  selector: 'app-table-single',
  templateUrl: './table-single.component.html',
  styleUrls: ['./table-single.component.scss']
})
export class TableSingleComponent implements OnInit {
  @Input() _id!: string;
  subscriptions = new Subscription();
  table!: Table;
  rows!: any[];

  selectedColumn!: TableColumn | undefined;
  selectedRow!: TableRow | undefined;
  displayColumnOptions = false;
  displayRowOptions = false;

  constructor(
    private store: Store<AppState>,
    public popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTable(this._id));

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
    return (this.selectedRow  && this.displayRowOptions)
      ? this.selectedRow.r_id == row.r_id
      : false;
  }
}
