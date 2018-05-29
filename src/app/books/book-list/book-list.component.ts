import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { Book } from '../book.model';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booksFromFirebase: Observable<AngularFireAction<DatabaseSnapshot>[]>;
  
  constructor(private db:AngularFireDatabase, private quoteService:QuotesService) { 
    this.booksFromFirebase = db.list<Book>('books').snapshotChanges();
  }
  onBookSelected(key: string) {
    this.quoteService.bookSelected.emit(key);
  }
  ngOnInit() {
  }

}
