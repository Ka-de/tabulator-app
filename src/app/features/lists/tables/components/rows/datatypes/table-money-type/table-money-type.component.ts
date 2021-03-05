import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { currencies as _currencies } from "@app/data/currencies";
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';

@Component({
  selector: 'app-table-money-type',
  templateUrl: './table-money-type.component.html',
  styleUrls: ['./table-money-type.component.scss']
})
export class TableMoneyTypeComponent implements OnInit {
  currencies = _currencies;

  @Input('data') data!: any;
  @Input('column') column!: TableColumn;
  @Output() event = new EventEmitter<{ currency: string, amount: number }>();

  constructor() {

  }

  ngOnInit(): void {
  }

  changed(amountElement: HTMLInputElement, currencyElement?: HTMLSelectElement) {
    const currency = currencyElement ? currencyElement.value : this.column.attributes.currency;
    const amount = amountElement.value;
    if (currency && amount) this.event.emit({ currency, amount: parseFloat(amount) });
  }

  selected(currency: string) {
    return this.data
      ? this.data.currency == currency
      : false;
  }
}
