import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lookup-column',
  templateUrl: './lookup-column.component.html',
  styleUrls: ['./lookup-column.component.scss']
})
export class LookupColumnComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  @Input('data') data!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLSelectElement) {    
    this.change.emit(element.value);
  }
}
