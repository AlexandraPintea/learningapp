import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Book } from '../book.model';
import {AuthorsService} from '../../authors-list/authors.service';
import {Author} from '../../authors-list/author.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [AuthorsService]
})
export class AddBookComponent implements OnInit {

  newBookName: string;
  newBookDescription: string;
  booksFromFirebase: Observable<any[]>;
  authorsFromFirebase:  Observable<any[]>;
  selectedAuthor: Author;
  authors: Author[];

  constructor(private db: AngularFireDatabase, public authorsService: AuthorsService) {
    this.booksFromFirebase = db.list('/books').valueChanges();
    this.authorsFromFirebase = db.list('/authors').valueChanges();
    this.authors = [{
      author: 'Amalia',
      id: '12'
    }, {
      author: 'Victor',
      id: '13'
    }];
  }

  onBookAdded() {
    const book = new Book(this.selectedAuthor.author,  this.newBookName, this.newBookDescription, this.selectedAuthor.id);
    this.db.list('/books').push(book);
  }

  ngOnInit() {
  }

}
