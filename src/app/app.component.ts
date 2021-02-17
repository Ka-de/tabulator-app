import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ToastService } from './features/toast/toast.service';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  subscriptions = new Subscription();
  constructor(
    private store: Store<AppState>,
    private toastService: ToastService
  ) {

  }

  ngOnInit() {
    this.subscriptions.add(
      this.store.select(state => state.error).subscribe(
        errors => this.showError
      )
    )
  }

  showError(error: any) {
    console.log(error);
    
  }
}
