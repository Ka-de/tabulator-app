import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-longtext-cell',
  templateUrl: './longtext-cell.component.html',
  styleUrls: ['./longtext-cell.component.scss']
})
export class LongtextCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
