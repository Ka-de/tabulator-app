import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableRowDTO } from '../../../dtos/tables-row.dto';
import { Table } from '../../../models/tables.model';
import { CreateTableRow, TablesActionsType } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.scss']
})
export class CreateRowComponent implements OnInit {
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
          if (tables.loaded && tables.action == TablesActionsType.CREATE_TABLE_ROW) {
            this.toastService.showMessage({
              title: 'Create row',
              details: 'Row creation was successful',
              type: 'success'
            });

            this.popupService.close('add-row');
          }
        }
      )
    );
  }

  createRow(data: TableRowDTO) {
    this.store.dispatch(new CreateTableRow({ _id: this.table._id, data }));
  }
}
