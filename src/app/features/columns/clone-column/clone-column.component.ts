import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '@app/features/popup';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table, TableDataTypes } from '@app/features/tables/models/tables.model';
import { CloneTableColumn } from '@app/features/tables/tables-store/tables.action';
import { Column } from '../models/tables-column.model';
import { ColumnCloneDTO } from '../models/tables-column.dto';

@Component({
  selector: 'app-clone-column',
  templateUrl: './clone-column.component.html',
  styleUrls: ['./clone-column.component.scss']
})
export class CloneColumnComponent implements OnInit {

  @Input() data!: { table: Table, column: Column };

  dataTypes = Object.values(TableDataTypes);
  subscriptions = new Subscription();
  attributes!: any;
  columnForm!: FormGroup;
  originalType!: string;
  from!: string;

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
      unique: [this.data.column.unique],
      withrows: [false]
    });

    if (this.data.column) {
      this.attributes = this.data.column.attributes;
      this.originalType = this.data.column.datatype;
      this.from = this.data.column.name;
    }
  }

  cloneColumn() {
    const data: ColumnCloneDTO = { ...this.columnForm.getRawValue(), from: this.from, attributes: this.attributes };    
    
    this.store.dispatch(new CloneTableColumn({ _id: this.data.table._id, data }));
  }

  setAttributes(event: any) {
    this.attributes = event;
  }

  close() {
    this.popupService.close('edit-column');
  }
}
