import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table, TableEditable } from '@app/features/tables/models/tables.model';
import { UpdateTable } from '@app/features/tables/tables-store/tables.action';
import { ToastService } from '@app/features/toast/toast.service';
import { PopupService } from '@app/features/popup';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  data!: { table: Table };
  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>,
    private toastService: ToastService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
  }

  updateTable(data: TableEditable) {
    this.store.dispatch(new UpdateTable({ _id: this.data.table._id, data }));
  }
}
