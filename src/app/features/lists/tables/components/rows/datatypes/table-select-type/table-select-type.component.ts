import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';

@Component({
  selector: 'app-table-select-type',
  templateUrl: './table-select-type.component.html',
  styleUrls: ['./table-select-type.component.scss']
})
export class TableSelectTypeComponent implements OnInit {
  @Input('data') data!: any;
  @Input('column') column!: TableColumn;
  @Output() event = new EventEmitter<string | string[]>();

  value: string[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  changed(value?: string) {
    this.event.emit(this.column.attributes.multiple ? this.value : value);
  }

  toggle(option: string) {
    this.value.includes(option)
      ? this.value = this.value.filter(o => o !== option)
      : this.value.push(option);

    this.changed();
  }
}
