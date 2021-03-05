import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';

@Component({
  selector: 'app-table-longtext-type',
  templateUrl: './table-longtext-type.component.html',
  styleUrls: ['./table-longtext-type.component.scss']
})
export class TableLongtextTypeComponent implements OnInit {
  @Input('column') column!: TableColumn;
  @Output() event = new EventEmitter<string>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLTextAreaElement) {
    const value = element.value;
    this.event.emit(value);
  }

  checklines(event: KeyboardEvent) {
    if (this.column.attributes?.maxLines && event.key == 'Enter') {
      const textArea = (event.target as HTMLTextAreaElement);
      let value = textArea.value;
      const lines = value.split('\n');
      const numberOfLines = lines.length;

      return this.column.attributes.maxLines > numberOfLines;
    }

    return true;
  }
}
