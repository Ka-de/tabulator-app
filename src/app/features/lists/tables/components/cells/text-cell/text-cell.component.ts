import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-cell',
  templateUrl: './text-cell.component.html',
  styleUrls: ['./text-cell.component.scss']
})
export class TextCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
