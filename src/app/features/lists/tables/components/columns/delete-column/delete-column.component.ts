import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumn } from '../../../models/tables-column.model';
import { Table } from '../../../models/tables.model';
import { DeleteTableColumn, TablesActionsType } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-delete-column',
  templateUrl: './delete-column.component.html',
  styleUrls: ['./delete-column.component.scss']
})
export class DeleteColumnComponent implements OnInit {
  @Input() data!: { column: TableColumn, table: Table };
  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  deleteColumn() {
    this.store.dispatch(new DeleteTableColumn({ _id: this.data.table._id, column_id: this.data.column._id }));
  }
}
