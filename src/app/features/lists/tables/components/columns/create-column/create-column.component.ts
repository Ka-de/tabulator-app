import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableColumnDTO } from '@app/features/lists/tables/dtos/tables.dto';
import { Table, TableDataTypes } from '@app/features/lists/tables/models/tables.model';
import { CreateTableColumn, TablesActionsType } from '@app/features/lists/tables/tables-store/tables.action';
import { selectCurrentTable } from '../../../tables-store/tables.selector';

@Component({
  selector: 'app-create-column',
  templateUrl: './create-column.component.html',
  styleUrls: ['./create-column.component.scss']
})
export class CreateColumnComponent implements OnInit {
  @Input() table!: Table;
  dataTypes = Object.values(TableDataTypes);
  columnForm!: FormGroup;
  subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastService: ToastService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.columnForm = this.formBuilder.group({
      name: ['', Validators.required],
      datatype: [this.dataTypes[0], Validators.required],
      description: [''],
      required: [],
      unique: []
    });

    this.subscriptions.add(
      this.store.select(state => state.tables).subscribe(
        tables => {
          if (tables.loaded && tables.action == TablesActionsType.CREATE_TABLE_COLUMN) {
            this.toastService.showMessage({
              title: 'Create column',
              details: 'Column creation was successful',
              type: 'success'
            });

            this.popupService.close('add-column');
          }
        }
      )
    );
  }

  createColumn() {
    const data: TableColumnDTO = this.columnForm.getRawValue();
    this.store.dispatch(new CreateTableColumn({ _id: this.table._id, data }));
  }
}
