import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-cell',
  templateUrl: './url-cell.component.html',
  styleUrls: ['./url-cell.component.scss']
})
export class UrlCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
