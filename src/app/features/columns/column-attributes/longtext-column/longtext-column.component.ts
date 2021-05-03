import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-longtext-column',
  templateUrl: './longtext-column.component.html',
  styleUrls: ['./longtext-column.component.scss']
})
export class LongtextColumnComponent implements OnInit {
  @Output() update = new EventEmitter<{ maxLines: number }>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
    this.data = this.data ? this.data : {};
  }

  changed(name: string, element: HTMLInputElement) {
    this.data = { ...this.data, [name]: element.value };
    this.update.emit(this.data as { maxLines: number });
  }
}
