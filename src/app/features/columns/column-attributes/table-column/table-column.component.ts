import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.scss']
})
export class TableColumnComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input('data') data!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLSelectElement) {    
    this.change.emit(element.value);
  }

}
