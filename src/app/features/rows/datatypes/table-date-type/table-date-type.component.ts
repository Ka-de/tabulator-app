import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '@app/features/columns/models/tables-column.model';

@Component({
  selector: 'app-table-date-type',
  templateUrl: './table-date-type.component.html',
  styleUrls: ['./table-date-type.component.scss']
})
export class TableDateTypeComponent implements OnInit {
  @Input('column') column!: Column;
  @Output() event = new EventEmitter<string>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLInputElement) {
    const value = element.value;
    if (value) this.event.emit(value);
  }
}
