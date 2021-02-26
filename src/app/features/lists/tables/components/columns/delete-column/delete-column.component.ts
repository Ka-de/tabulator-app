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
  @Input('column') column!: TableColumn;
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
          if (tables.action == TablesActionsType.DELETE_TABLE_COLUMN && tables.loaded) {
            this.toastService.showMessage({
              type: 'success',
              title: 'Table Deletion',
              details: 'Table was deleted successfully.'
            });

            this.popupService.close('delete-column');
          }
        }
      )
    );
  }

  deleteColumn() {
    this.store.dispatch(new DeleteTableColumn({ _id: this.table._id, column_id: this.column._id }));
  }
}
