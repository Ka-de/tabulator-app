import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableRowDTO } from '../../../dtos/tables-row.dto';
import { TableColumn } from '../../../models/tables-column.model';
import { Table } from '../../../models/tables.model';
import { CreateTableRow, TablesActionsType } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.scss']
})
export class CreateRowComponent implements OnInit {
  @Input() data!: { table: Table };
  subscriptions = new Subscription();
  content: any = {};

  get isFormInvalid() {
    for (let column of this.data.table.columns) {
      if (column.required) {
        if (!this.content[column.name]) return true;
      }
    }
    return false;
  }

  constructor(
    private store: Store<AppState>,
    private popupService: PopupService
  ) { }

  ngOnInit(): void { }

  createRow() {
    this.store.dispatch(new CreateTableRow({ _id: this.data.table._id, data: this.content }));
  }

  setData(value: any, column: TableColumn) {
    this.content = { ...this.content, [column.name]: value };
  }

  close() {
    this.popupService.close('add-row');
  }
}
