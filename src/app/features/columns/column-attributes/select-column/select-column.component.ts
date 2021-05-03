import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-column',
  templateUrl: './select-column.component.html',
  styleUrls: ['./select-column.component.scss']
})
export class SelectColumnComponent implements OnInit {

  @Output() update = new EventEmitter<{ options: string[], multiple: boolean }>();
  @Input('data') data!: any;
  options: string[] = [];
  multiple = false;
  empty = false;

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      this.options = [...this.data.options];
      this.multiple = this.data.multiple;
    }

    this.empty = !!this.options.length;
  }

  changed() {
    this.update.emit({ options: this.options, multiple: this.multiple });
  }

  monitor(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;

    if (event.key == 'Enter') {
      this.push(element);
      this.empty = true;
    }
    else if (event.key == 'Backspace') {
      if (this.options.length) {
        if (this.empty) {
          this.pop(element);
          this.empty = false;
        }
        else if (element.value == '') {
          this.empty = true;
        }
      }
    }
    else {
      this.empty = false;
    }
  }

  push(input: HTMLInputElement) {
    this.options.push(input.value);
    input.value = '';
    input.setAttribute('value', '');
  }

  pop(input: HTMLInputElement) {
    const value = this.options.pop() as string;
    input.value = value;
    input.setAttribute('value', value);
  }

  remove(index: number) {
    this.options = this.options.filter((t: string, i: number) => index !== i);
  }
}
