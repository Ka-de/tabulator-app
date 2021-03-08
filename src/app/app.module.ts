import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsService } from './features/lists/lists.service';
import { TablesService } from './features/lists/tables/tables.service';
import { TableResolver } from './features/lists/tables/tables.resolver';
import { ToastComponent } from './features/toast/toast.component';
import { ToastService } from './features/toast/toast.service';
import { AppStoreModule } from './store/app-store.module';
import { SharedModule } from './utils/shared.module';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PopupService } from './features/popup';
import { HomeComponent } from './features/home/home.component';
import { SampleComponent } from './sample/sample.component';
import { ValidateRow } from './utils/row.validator';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    NotFoundComponent,
    HomeComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AppStoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToastService,
    TableResolver,
    TablesService,
    ListsService,
    PopupService,
    ValidateRow
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
