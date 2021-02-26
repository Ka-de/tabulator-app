import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent implements OnInit, OnDestroy {

  @Input()
  id!: string;

  @Input('heading')
  heading: string = '';

  private element!: HTMLElement;

  constructor(private popupService: PopupService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.log('Modal must have an id')
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', event => {
      let clicked = event.target as HTMLElement;
      if (this.element == clicked) {
        this.close()
      }
    });

    this.popupService.add(this);
  }

  ngOnDestroy() {
    this.popupService.remove(this.id);
    this.element.remove();
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('popup-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('popup-open');
  }
}
