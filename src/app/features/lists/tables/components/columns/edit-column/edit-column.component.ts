import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumnDTO } from '../../../dtos/tables.dto';
import { TableColumn } from '../../../models/tables-column.model';
import { Table, TableDataTypes } from '../../../models/tables.model';
import { TablesActionsType, UpdateTableColumn } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.scss']
})
export class EditColumnComponent implements OnInit {
  @Input('table') table!: Table;
  @Input('column') column!: TableColumn;

  dataTypes = Object.values(TableDataTypes);
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
          if (tables.loaded && tables.action == TablesActionsType.UPDATE_TABLE_COLUMN) {
            this.toastService.showMessage({
              title: 'Update column',
              details: 'Column update was successful',
              type: 'success'
            });

            this.popupService.close('edit-column');
          }
        }
      )
    );
  }

  updateColumn(data: TableColumnDTO) {
    this.store.dispatch(new UpdateTableColumn({ _id: this.table._id, column_id: this.column._id, data }));
  }
}
