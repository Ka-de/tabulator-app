import { Component, OnInit } from '@angular/core';
import { fade } from '@app/animations/fade';
import { slide } from '@app/animations/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fade, slide
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
