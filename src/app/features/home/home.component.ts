import { Component, OnInit } from '@angular/core';
import { fade } from '@app/animations/fade';
import { slide } from '@app/animations/slide';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fade, slide
  ]
})
export class HomeComponent implements OnInit {
  appName = environment.name;
  
  constructor() { }

  ngOnInit(): void {
  }

}
