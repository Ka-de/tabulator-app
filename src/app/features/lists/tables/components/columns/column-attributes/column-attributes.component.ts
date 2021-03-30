import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-column-attributes',
  templateUrl: './column-attributes.component.html',
  styleUrls: ['./column-attributes.component.scss']
})
export class ColumnAttributesComponent implements OnInit {
  @Input('type') type!: string;
  @Input('attributes') attributes!: string;

  @Output() update = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  isType(type: string) {
    return this.type == type;
  }

  changed(event: any) {
    this.update.emit(event);
  }
}
