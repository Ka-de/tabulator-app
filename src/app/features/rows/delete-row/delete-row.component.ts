import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table } from '@app/features/tables/models/tables.model';
import { DeleteTableRow } from '@app/features/tables/tables-store/tables.action';
import { Row } from '../models/tables-rows.model';

@Component({
  selector: 'app-delete-row',
  templateUrl: './delete-row.component.html',
  styleUrls: ['./delete-row.component.scss']
})
export class DeleteRowComponent implements OnInit {
  @Input('row') data!: { row: Row, table: Table };
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
