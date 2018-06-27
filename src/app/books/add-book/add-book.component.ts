import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Book } from '../book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookName: string;
  newBookAuthor: string;
  newBookDescription: string;
  newBookId: string;
  booksFromFirebase: Observable<any[]>;
   book = new Book(this.newBookAuthor, this.newBookName, this.newBookDescription, this.newBookId);

  constructor(private db: AngularFireDatabase) {
    this.booksFromFirebase = db.list('/books').valueChanges();
  }

  onBookAdded(db: AngularFireDatabase) {
    const book = new Book(this.newBookAuthor, this.newBookName, this.newBookDescription, this.newBookId);
    this.db.list('/books').push(book);
  }
  ngOnInit() {
  }

}
