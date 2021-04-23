import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-cell',
  templateUrl: './image-cell.component.html',
  styleUrls: ['./image-cell.component.scss']
})
export class ImageCellComponent implements OnInit {
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
