import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: string[] = ['Master and Margarita', 'Harry Potter', 'To kill a mockingbird', 'The idiot', 'Game of Thrones'];
  booksFromFirebase: Observable<any[]>;
  constructor(private db:AngularFireDatabase) { 
    this.booksFromFirebase = db.list('/books').valueChanges();
  }

  ngOnInit() {
  }

}
