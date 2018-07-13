import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Author} from '../author.model';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  booksFromFirebase: Observable<any[]>;
  newAuthorName: string;
  newAuthorid: string;

  constructor(private db: AngularFireDatabase) {
    this.booksFromFirebase = db.list('/books').valueChanges();
  }
  onAuthorAdded() {
    const author = new Author(this.newAuthorName, this.newAuthorid);
    this.db.list('/authors').push(author);
  }
  ngOnInit() {
  }

}
