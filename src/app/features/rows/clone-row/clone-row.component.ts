import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { ValidateRow } from '@app/utils/row.validator';
import { Store } from '@ngrx/store';
import { Table } from '@app/features/tables/models/tables.model';
import { CreateTableRow } from '@app/features/tables/tables-store/tables.action';
import { Row } from '../models/tables-rows.model';
import { Column } from '@app/features/columns/models/tables-column.model';

@Component({
  selector: 'app-clone-row',
  templateUrl: './clone-row.component.html',
  styleUrls: ['./clone-row.component.scss']
})
export class CloneRowComponent implements OnInit {
  @Input() data!: { table: Table, row: Row };
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

  setData(value: any, column: Column) {
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
