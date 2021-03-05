import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';

@Component({
  selector: 'app-table-datetime-type',
  templateUrl: './table-datetime-type.component.html',
  styleUrls: ['./table-datetime-type.component.scss']
})
export class TableDatetimeTypeComponent implements OnInit {
  @Input('column') column!: TableColumn;
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
