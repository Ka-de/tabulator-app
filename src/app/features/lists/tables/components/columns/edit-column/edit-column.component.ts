import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumnDTO } from '../../../dtos/tables.dto';
import { TableColumn } from '../../../models/tables-column.model';
import { Table, TableDataTypes } from '../../../models/tables.model';
import { UpdateTableColumn } from '../../../tables-store/tables.action';

@Component({
  selector: 'app-edit-column',
  templateUrl: './edit-column.component.html',
  styleUrls: ['./edit-column.component.scss']
})
export class EditColumnComponent implements OnInit {
  @Input() data!: { table: Table, column: TableColumn };

  dataTypes = Object.values(TableDataTypes);
  subscriptions = new Subscription();
  attributes!: any;
  columnForm!: FormGroup;

  set type(datatype: string) {
    this.data.column = { ...this.data.column, 'datatype': datatype as TableDataTypes };
  }

  get type() {
    return this.data.column.datatype;
  }

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.columnForm = this.formBuilder.group({
      name: [this.data.column.name, Validators.required],
      datatype: [this.data.column.datatype, Validators.required],
      description: [this.data.column.description],
      required: [this.data.column.required],
      unique: [this.data.column.unique]
    });

    if (this.data.column) {
      this.attributes = this.data.column.attributes;
    }    
  }

  updateColumn() {
    const data: TableColumnDTO = { ...this.columnForm.getRawValue(), attributes: this.attributes };
    this.store.dispatch(new UpdateTableColumn({ _id: this.data.table._id, column_id: this.data.column._id, data }));
  }

  setAttributes(event: any) {
    this.attributes = event;
  }

  close() {
    this.popupService.close('edit-column');
  }
}
