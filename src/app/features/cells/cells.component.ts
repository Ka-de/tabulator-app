import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../columns/models/tables-column.model';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.scss']
})
export class CellsComponent implements OnInit {
  @Input('column') column!: Column;
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  isType(type: string, check: string) {
    return type === check;
  }

}
