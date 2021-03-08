import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from '@app/features/toast/toast.service';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';

@Component({
  selector: 'app-table-url-type',
  templateUrl: './table-url-type.component.html',
  styleUrls: ['./table-url-type.component.scss']
})
export class TableUrlTypeComponent implements OnInit {

  @Input('column') column!: TableColumn;
  @Output() event = new EventEmitter<string>();
  @Input('data') data!: any;

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  changed(element: HTMLInputElement) {
    const value = element.value;
    try {
      if(new URL(value)){
        this.event.emit(value);
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
