import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableRow } from '../../../models/tables-rows.model';
import { Table } from '../../../models/tables.model';
import { DeleteTableRow, TablesActionsType } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-delete-row',
  templateUrl: './delete-row.component.html',
  styleUrls: ['./delete-row.component.scss']
})
export class DeleteRowComponent implements OnInit {
  @Input('row') data!: { row: TableRow, table: Table };
  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>,
    private toastService: ToastService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void { }

  deleteRow() {
    this.store.dispatch(new DeleteTableRow({ _id: this.data.table._id, row_id: this.data.row.r_id }));
  }
}
