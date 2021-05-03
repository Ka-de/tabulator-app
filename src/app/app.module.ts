import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsService } from '@app/features/lists/lists.service';
import { TablesService } from '@app/features/tables/tables.service';
import { TableResolver } from '@app/features/tables/tables.resolver';
import { ToastComponent } from '@app/features/toast/toast.component';
import { ToastService } from '@app/features/toast/toast.service';
import { AppStoreModule } from './store/app-store.module';
import { SharedModule } from './utils/shared.module';
import { NotFoundComponent } from '@app/features/not-found/not-found.component';
import { PopupService } from '@app/features/popup';
import { HomeComponent } from '@app/features/home/home.component';
import { ValidateRow } from './utils/row.validator';
import { RowService } from './features/rows/rows.service';
import { ColumnService } from './features/columns/columns.service';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    RowService,
    ColumnService,
    ListsService,
    PopupService,
    ValidateRow
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
