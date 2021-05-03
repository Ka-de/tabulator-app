import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formular-column',
  templateUrl: './formular-column.component.html',
  styleUrls: ['./formular-column.component.scss']
})
export class FormularColumnComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input('data') data!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLSelectElement) {    
    this.change.emit(element.value);
  }

}
