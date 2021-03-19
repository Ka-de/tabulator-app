import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { ValidateRow } from '@app/utils/row.validator';
import { Store } from '@ngrx/store';
import { TableColumn } from '../../../models/tables-column.model';
import { TableRow } from '../../../models/tables-rows.model';
import { Table } from '../../../models/tables.model';
import { CreateTableRow } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-clone-row',
  templateUrl: './clone-row.component.html',
  styleUrls: ['./clone-row.component.scss']
})
export class CloneRowComponent implements OnInit {
  @Input() data!: { table: Table, row: TableRow };
  content: any = {};
  invalid = false;

  constructor(
    private store: Store<AppState>,
    private popupService: PopupService,
    private rowValidator: ValidateRow,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.content = this.data.row;
    this.validate();
  }

  cloneRow() {
    delete this.content.r_id;
    this.rowValidator.validate(this.content, this.data.table)
      .then(data => {
        this.store.dispatch(new CreateTableRow({ _id: this.data.table._id, data: this.content }));
      })
      .catch(error => {
        this.toastService.showError(error);
      });
  }

  isType(type: string, check: string) {
    return type === check;
  }

  setData(value: any, column: TableColumn) {
    this.content = { ...this.content, [column.name]: value };
    this.validate();
  }

  close() {
    this.popupService.close('edit-row');
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
}
