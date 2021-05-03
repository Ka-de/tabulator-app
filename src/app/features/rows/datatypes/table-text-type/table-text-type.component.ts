import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '@app/features/columns/models/tables-column.model';

@Component({
  selector: 'app-table-text-type',
  templateUrl: './table-text-type.component.html',
  styleUrls: ['./table-text-type.component.scss']
})
export class TableTextTypeComponent implements OnInit {
  @Input('column') column!: Column;
  @Output() event = new EventEmitter<string>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {    
  }

  changed(element: HTMLInputElement) {
    const value = element.value;
    this.event.emit(value);
  }
}
