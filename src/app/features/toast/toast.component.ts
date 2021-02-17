import { Component, OnInit } from '@angular/core';
import { Toast } from '@app/features/toast/toast.model';
import { AppState } from '@app/store';
import { RemoveToast } from '@app/features/toast/store/toast.action';
import { selectLastToasts } from '@app/features/toast/store/toast.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  notifications!: Observable<Toast[]>
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.notifications = this.store.select(selectLastToasts);

    this.notifications.subscribe(
      toast => {
        for (let i = 0; i < toast.length; i++) {
          let time = setTimeout(() => {
            this.store.dispatch(new RemoveToast(i));
          }, <number>toast[i].timeStamp * 1000);
        }
      }
    );
  }

  dismis(i: number) {
    this.store.dispatch(new RemoveToast(i));
  }
}
