import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordsComponent } from './records/records.component';
import { RecordItemComponent } from './record-item/record-item.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./shared/data.service";
import {MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { EditRecordDialogComponent } from './dialog/edit-record-dialog/edit-record-dialog.component';
import {MatCardModule} from "@angular/material/card";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordItemComponent,
    EditRecordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
