import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Writeable } from '@app/utils/custom.type';
import { ValidateRow } from '@app/utils/row.validator';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableRowDTO } from '../../../dtos/tables-row.dto';
import { TableColumn } from '../../../models/tables-column.model';
import { TableRow } from '../../../models/tables-rows.model';
import { Table } from '../../../models/tables.model';
import { TablesActionsType, UpdateTableRow } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent implements OnInit {
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

  updateRow() {
    this.rowValidator.validate(this.content, this.data.table)
      .then(data => {
        this.store.dispatch(new UpdateTableRow({ _id: this.data.table._id, row_id: this.data.row.r_id, data: this.content }));
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