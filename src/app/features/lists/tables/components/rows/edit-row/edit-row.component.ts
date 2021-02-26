import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableRowDTO } from '../../../dtos/tables-row.dto';
import { TableRow } from '../../../models/tables-rows.model';
import { Table } from '../../../models/tables.model';
import { TablesActionsType, UpdateTableRow } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent implements OnInit {
  @Input('row') row!: TableRow | any;
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
          if (tables.loaded && tables.action == TablesActionsType.UPDATE_TABLE_ROW) {
            this.toastService.showMessage({
              title: 'Update row',
              details: 'Row update was successful',
              type: 'success'
            });

            this.popupService.close('edit-row');
          }
        }
      )
    );
  }

  updateRow(data: TableRowDTO) {
    this.store.dispatch(new UpdateTableRow({ _id: this.table._id, row_id: this.row.r_id, data }));
  }
}
