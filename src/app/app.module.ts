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
import { BookListComponent } from './books/book-list/book-list.component';
import { DateComponent } from './date/date.component';
import { CardListComponent } from './books/card-list/card-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    BooksComponent,
    BookListComponent,
    DateComponent,
    CardListComponent,
    AddBookComponent,
    AddQuoteComponent,
    RandomQuoteComponent
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
