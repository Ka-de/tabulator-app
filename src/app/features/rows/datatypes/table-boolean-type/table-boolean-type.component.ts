import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '@app/features/columns/models/tables-column.model';

@Component({
  selector: 'app-table-boolean-type',
  templateUrl: './table-boolean-type.component.html',
  styleUrls: ['./table-boolean-type.component.scss']
})
export class TableBooleanTypeComponent implements OnInit {
  @Input('column') column!: Column;
  @Output() event = new EventEmitter<boolean>();
  @Input('data') data!: any;

  flag = false;

  get value() {
    return this.flag;
  }

  set value(v: boolean) {
    this.flag = v;
    this.changed();
  }

  constructor() { }

  ngOnInit(): void {
    this.flag = !!this.data;
  }

  changed() {
    this.event.emit(this.flag);
  }
}
