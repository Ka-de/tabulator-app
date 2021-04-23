import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';
import { ToastService } from '@app/features/toast/toast.service';

@Component({
  selector: 'app-table-image-type',
  templateUrl: './table-image-type.component.html',
  styleUrls: ['./table-image-type.component.scss']
})
export class TableImageTypeComponent implements OnInit {

  @Input('column') column!: TableColumn;
  @Output() event = new EventEmitter<{ local?: string, url: string }>();
  @Input('data') data!: any;

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  changed(element: HTMLInputElement) {
    const value = element.value;
    try {
      if (new URL(value)) {
        this.event.emit({ url: value });
      }
    } catch (error) {
      this.toastService.showMessage({
        type: 'error',
        title: 'URL Error',
        details: error
      });
    }
  }
}
