import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice-column',
  templateUrl: './choice-column.component.html',
  styleUrls: ['./choice-column.component.scss']
})
export class ChoiceColumnComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input('data') data!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLSelectElement) {    
    this.change.emit(element.value);
  }

}
