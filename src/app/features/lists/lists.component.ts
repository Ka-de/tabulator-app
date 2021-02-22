import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  currentPane = 'collections';

  constructor() { }

  ngOnInit(): void {

  }

  showPane(pane: string) {
    return this.currentPane == pane;
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
}
