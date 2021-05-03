import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-cell',
  templateUrl: './time-cell.component.html',
  styleUrls: ['./time-cell.component.scss']
})
export class TimeCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
