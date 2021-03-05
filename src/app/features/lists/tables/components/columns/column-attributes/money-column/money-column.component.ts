import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { currencies as _currencies } from "@app/data/currencies";

@Component({
  selector: 'app-money-column',
  templateUrl: './money-column.component.html',
  styleUrls: ['./money-column.component.scss']
})
export class MoneyColumnComponent implements OnInit {
  currencies = _currencies;
  @Output() update = new EventEmitter<{ currency: string }>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLSelectElement) {
    this.update.emit({ currency: element.value });
  }

  selected(currency: string) {
    return this.data
      ? this.data.currency == currency
      : false;
  }
}
