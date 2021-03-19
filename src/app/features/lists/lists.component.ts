import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PopupService } from '../popup';
import { TableCreateComponent } from './tables/components/table-create/table-create.component';
import { TableDeleteComponent } from './tables/components/table-delete/table-delete.component';
import { TableEditComponent } from './tables/components/table-edit/table-edit.component';
import { Table } from './tables/models/tables.model';
import { DeleteTable, GetTables } from './tables/tables-store/tables.action';
import { selectAllTables } from './tables/tables-store/tables.selector';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  tables!: Table[];

  subscriptions = new Subscription();
  displayTableOptions = false;
  displayDatabaseOptions = false;

  selectedTable!: Table;
  tableEdit = TableEditComponent;
  tableDelete = TableDeleteComponent;
  tableCreate = TableCreateComponent;

  search = '';

  public _id!: string;
  constructor(
    public router: Router,
    private store: Store<AppState>,
    public popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.reload();

    this.subscriptions.add(
      // get all tables
      this.store.select(selectAllTables).subscribe(
        tables => this.tables = tables
      )
    );
  }

  toggleSidebar(sidebar: HTMLElement, toggleSidebar: HTMLElement) {
    sidebar.classList.toggle('reduced');
    sidebar.parentElement?.classList.toggle('open-sidebar');
    toggleSidebar.classList.toggle('fa-angle-right');
    toggleSidebar.classList.toggle('fa-angle-left')
  }

  openSidebar(sidebar: HTMLElement, toggleSidebar: HTMLElement) {
    sidebar.classList.remove('reduced');
    sidebar.parentElement?.classList.add('open-sidebar');
    toggleSidebar.classList.remove('fa-angle-right');
    toggleSidebar.classList.add('fa-angle-left')
  }

  closeSidebar(sidebar: HTMLElement, toggleSidebar: HTMLElement, event?: Event) {
    if (!event || event?.target != toggleSidebar) {
      sidebar.classList.add('reduced');
      sidebar.parentElement?.classList.remove('open-sidebar');
      toggleSidebar.classList.add('fa-angle-right');
      toggleSidebar.classList.remove('fa-angle-left');
    }
  }

  showTableOptions(table: Table) {
    return (this.selectedTable && this.displayTableOptions)
      ? true
      : false;
  }

  //reload the view
  reload() {
    this.store.dispatch(new GetTables());
  }

  searchTable(table: Table) {
    return table.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
  }
}
