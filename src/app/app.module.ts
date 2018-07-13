import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { QuoteCardComponent } from './shared/quote-card/quote-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CardListComponent } from './books/quote-list/quote-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { AddQuoteComponent } from './books/add-quote/add-quote.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AddAuthorComponent } from './authors-list/add-author/add-author.component';
import { AuthorDetailsComponent } from './authors-list/author-details/author-details.component';
import { RegistrationComponent } from './register/registration/registration.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'book/:id', component: BookDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'authors', component: AuthorsListComponent},
  {path: 'authors/:id', component: AuthorDetailsComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteCardComponent,
    BooksComponent,
    BookListComponent,
    CardListComponent,
    AddBookComponent,
    AddQuoteComponent,
    RandomQuoteComponent,
    DashboardComponent,
    BookDetailComponent,
    HomeComponent,
    AuthorsListComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'learningapp-dbb59'),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
