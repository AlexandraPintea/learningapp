import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Book } from '../book.model';
import { QuotesService } from '../quotes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booksFromFirebase: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(private db: AngularFireDatabase, private quoteService: QuotesService, private router: Router) {
    this.booksFromFirebase = db.list<Book>('books').snapshotChanges();
  }
  onBookSelected(key: string) {
    this.quoteService.bookSelected.emit(key);
    this.quoteService.selectedBookId = key;
    this.quoteService.isBookSelected = true;
  }
  readMore(bookid: string) {
    // this.router.navigateByUrl('/book/' + bookid);
    this.router.navigate(['book', bookid]); // builds the same route as above
  }
  ngOnInit() {
  }

}
