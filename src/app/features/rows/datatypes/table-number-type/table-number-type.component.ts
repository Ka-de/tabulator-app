import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '@app/features/columns/models/tables-column.model';

@Component({
  selector: 'app-table-number-type',
  templateUrl: './table-number-type.component.html',
  styleUrls: ['./table-number-type.component.scss']
})
export class TableNumberTypeComponent implements OnInit {

  @Input('column') column!: Column;
  @Output() event = new EventEmitter<number>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLInputElement) {
    const value: number = parseFloat(element.value);
    this.event.emit(value);
  }
}
