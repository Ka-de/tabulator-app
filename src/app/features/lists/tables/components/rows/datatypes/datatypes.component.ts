import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '../../../models/tables-column.model';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.scss']
})
export class DatatypesComponent implements OnInit {
  @Input('column') column!: TableColumn;
  @Output() update = new EventEmitter<boolean>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  isType(type: string, check: string) {
    return type === check;
  }

  changed(event: any){    
    this.update.emit(event);
  }
}
