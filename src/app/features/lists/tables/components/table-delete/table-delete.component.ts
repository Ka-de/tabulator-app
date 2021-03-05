import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '@app/features/popup';
import { ToastService } from '@app/features/toast/toast.service';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Table } from '@app/features/lists/tables/models/tables.model';
import { GetTable, TablesActionsType, DeleteTable } from '@app/features/lists/tables/tables-store/tables.action';
import { selectCurrentTable } from '@app/features/lists/tables/tables-store/tables.selector';

@Component({
  selector: 'app-table-delete',
  templateUrl: './table-delete.component.html',
  styleUrls: ['./table-delete.component.scss']
})
export class TableDeleteComponent implements OnInit, OnDestroy {
  data!: { table: Table };
  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>,
    private toastService: ToastService,
    private popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  deleteTable() {
    this.store.dispatch(new DeleteTable(this.data.table._id));
  }
}
