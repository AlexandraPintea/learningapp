import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../environments/environment";

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ListComponent } from './list/list.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    BooksComponent,
    ListComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'learningapp-dbb59'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
