import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-cell',
  templateUrl: './money-cell.component.html',
  styleUrls: ['./money-cell.component.scss']
})
export class MoneyCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
