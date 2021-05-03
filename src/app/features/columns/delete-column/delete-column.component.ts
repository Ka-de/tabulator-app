import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table } from '@app/features/tables/models/tables.model';
import { DeleteTableColumn } from '@app/features/tables/tables-store/tables.action';
import { Column } from '../models/tables-column.model';

@Component({
  selector: 'app-delete-column',
  templateUrl: './delete-column.component.html',
  styleUrls: ['./delete-column.component.scss']
})
export class DeleteColumnComponent implements OnInit {
  @Input() data!: { column: Column, table: Table };
  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  deleteColumn() {
    this.store.dispatch(new DeleteTableColumn({ _id: this.data.table._id, column_id: this.data.column._id }));
  }
}
