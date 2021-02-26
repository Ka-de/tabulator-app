import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table, TableEditable } from '@app/features/lists/tables/models/tables.model';
import { GetTable, TablesActionsType, UpdateTable } from '@app/features/lists/tables/tables-store/tables.action';
import { selectCurrentTable } from '@app/features/lists/tables/tables-store/tables.selector';
import { ToastService } from '@app/features/toast/toast.service';
import { PopupService } from '@app/features/popup';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  @Input('table') table!: Table;
  @Input('popup') popup!: string;

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
          if (tables.loaded && tables.action == TablesActionsType.UPDATE_TABLE) {
            this.toastService.showMessage({
              title: 'Table Update',
              details: 'Table update was successful, navigating to table',
              type: 'success'
            });

            this.popupService.close('edit-table');
          }
        }
      )
    )
  }

  updateTable(data: TableEditable) {
    this.store.dispatch(new UpdateTable({ _id: this.table._id, data }));
  }
}
