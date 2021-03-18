import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '@app/features/popup';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table, TableDataTypes } from '@app/features/lists/tables/models/tables.model';
import { CreateTableColumn } from '@app/features/lists/tables/tables-store/tables.action';
import { TableColumnDTO } from '../../../dtos/tables-column.dto';

@Component({
  selector: 'app-create-column',
  templateUrl: './create-column.component.html',
  styleUrls: ['./create-column.component.scss']
})
export class CreateColumnComponent implements OnInit, OnDestroy {
  @Input() data!: { table: Table };
  dataTypes = Object.values(TableDataTypes);
  columnForm!: FormGroup;
  subscriptions = new Subscription();

  type!: string;
  attributes!: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.columnForm = this.formBuilder.group({
      name: ['', Validators.required],
      datatype: [this.dataTypes[0], Validators.required],
      description: [''],
      required: [],
      unique: []
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  createColumn() {
    const data: TableColumnDTO = { ...this.columnForm.getRawValue(), attributes: this.attributes };
    this.store.dispatch(new CreateTableColumn({ _id: this.data.table._id, data }));
  }

  setAttributes(event: any) {
    this.attributes = event;
  }

  close() {
    this.popupService.close('add-column');
  }
}
