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
  @Input('row') row!: TableRow;
  @Input('table') table!: Table;

  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>,
    private toastService: ToastService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.select(state => state.tables).subscribe(
        tables => {
          if (tables.action == TablesActionsType.DELETE_TABLE_ROW && tables.loaded) {
            this.toastService.showMessage({
              type: 'success',
              title: 'Row Deletion',
              details: 'Table row was deleted successfully.'
            });

            this.popupService.close('delete-row');
          }
        }
      )
    );
  }

  deleteRow() {
    this.store.dispatch(new DeleteTableRow({ _id: this.table._id, row_id: this.row.r_id }));
  }
}
