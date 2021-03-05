import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CreateTable, TablesActionsType } from '@app/features/lists/tables/tables-store/tables.action';
import { selectCurrentTable } from '@app/features/lists/tables/tables-store/tables.selector';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.scss']
})
export class TableCreateComponent implements OnInit {
  tableForm!: FormGroup;
  subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  createTable() {
    const data = this.tableForm.getRawValue();

    this.store.dispatch(new CreateTable(data));
  }
}
