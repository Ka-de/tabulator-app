import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '@app/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PopupService } from '../popup';
import { ListWindows } from './lists.model';
import { Table } from './tables/models/tables.model';
import { DeleteTable, GetTables } from './tables/tables-store/tables.action';
import { selectAllTables } from './tables/tables-store/tables.selector';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  currentPane = ListWindows.TABLES;
  currentWindow!: ListWindows;
  tables!: Table[];

  subscriptions = new Subscription();
  displayTableOptions = false;
  displayDatabaseOptions = false;

  selectedTable!: Table;

  public _id!: string;
  public listWindows = ListWindows;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    public popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.currentPane = this.activatedRoute.snapshot.url[0].path as ListWindows;
    this._id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.currentWindow = this.currentPane;

    if (this._id) {
      this.currentWindow = this.currentPane == ListWindows.TABLES ? ListWindows.TABLE : ListWindows.DOCUMENT;
    }

    this.store.dispatch(new GetTables());

    this.subscriptions.add(
      this.store.select(selectAllTables).subscribe(
        tables => this.tables = tables
      )
    );
  }

  showPane(pane: string) {
    return this.currentPane == pane;
  }

  showWindow(w: ListWindows) {
    return this.currentWindow == w;
  }

  toggleSidebar(sidebar: HTMLElement, toggleSidebar: HTMLElement) {
    sidebar.classList.toggle('reduced');
    toggleSidebar.classList.toggle('fa-angle-right');
    toggleSidebar.classList.toggle('fa-angle-left')
  }

  openSidebar(sidebar: HTMLElement, toggleSidebar: HTMLElement) {
    sidebar.classList.remove('reduced');
    toggleSidebar.classList.remove('fa-angle-right');
    toggleSidebar.classList.add('fa-angle-left')
  }

  showTableOptions(table: Table) {
    return (this.selectedTable && this.displayTableOptions)
      ? true
      : false;
  }

  removeTable(event: Event) {
    console.log(event);
    
  }
}
