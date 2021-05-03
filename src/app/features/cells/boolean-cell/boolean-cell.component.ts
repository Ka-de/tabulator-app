import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean-cell',
  templateUrl: './boolean-cell.component.html',
  styleUrls: ['./boolean-cell.component.scss']
})
export class BooleanCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
