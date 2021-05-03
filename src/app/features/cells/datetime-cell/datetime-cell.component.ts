import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime-cell',
  templateUrl: './datetime-cell.component.html',
  styleUrls: ['./datetime-cell.component.scss']
})
export class DatetimeCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
