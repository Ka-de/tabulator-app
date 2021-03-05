import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-attributes-column',
  templateUrl: './attributes-column.component.html',
  styleUrls: ['./attributes-column.component.scss']
})
export class AttributesColumnComponent implements OnInit {
  @Input('data') data!: any;
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLSelectElement) {
    this.change.emit(element.value);
  }

}
