import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ContentChild, ElementRef, Input, OnDestroy, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef, ViewEncapsulation, ViewRef } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent implements OnInit, OnDestroy {

  @Input() id!: string;
  @Input() component!: Type<unknown>
  @Input() heading: string = '';
  @Input() data!: any;
  componentHolder!: ComponentRef<any>;
  element!: HTMLElement;

  removeWindow = (event: Event) => {
    let clicked = event.target as HTMLElement;

    if (this.element == clicked) {
      this.popupService.close(this.id);
    }
  }

  @ViewChild('body', { read: ViewContainerRef }) bodyRef!: ViewContainerRef;

  constructor(
    private popupService: PopupService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.log('Modal must have an id')
      return;
    }

    if (this.id == 'delete-table-single') {
      console.log(this.data);

    }

    this.popupService.add(this);
  }

  ngOnDestroy() {
    this.popupService.remove(this.id);
    this.element.remove();
  }

  open(data: any = {}) {
    this.element.style.display = 'block';
    document.body.classList.add('popup-open');

    this.data = { ...this.data, ...data };
    
    if (this.component) {
      const c = this.componentFactoryResolver.resolveComponentFactory(this.component);
      this.componentHolder = this.bodyRef.createComponent(c);
      this.componentHolder.instance.data = this.data;
    }

    this.element.addEventListener('click', this.removeWindow, false);
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('popup-open');
    if (this.componentHolder) {
      this.componentHolder.destroy();
    }

    this.element.removeEventListener('click', this.removeWindow, false);
  }
}
