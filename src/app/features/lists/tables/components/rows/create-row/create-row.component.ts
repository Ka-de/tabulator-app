import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { ValidateRow } from '@app/utils/row.validator';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumn } from '../../../models/tables-column.model';
import { Table } from '../../../models/tables.model';
import { CreateTableRow } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.scss']
})
export class CreateRowComponent implements OnInit {
  @Input() data!: { table: Table };
  subscriptions = new Subscription();
  content: any = {};
  invalid = true;

  constructor(
    private popupService: PopupService,
    private rowValidator: ValidateRow,
    private toastService: ToastService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.validate();
  }

  createRow() {
    this.rowValidator.validate(this.content, this.data.table)
      .then(data => {
        this.store.dispatch(new CreateTableRow({ _id: this.data.table._id, data: this.content }))
      })
      .catch(error => {
        this.toastService.showError(error);
      });
  }

  validate() {
    this.rowValidator.validate(this.content, this.data.table)
      .then(data => {
        this.invalid = false;
      })
      .catch(error => {
        this.invalid = true;
      });
  }

  setData(value: any, column: TableColumn) {
    this.content = { ...this.content, [column.name]: value };
    this.validate();
  }

  close() {
    this.popupService.close('add-row');
  }
}
