import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireAction, AngularFireDatabase, DatabaseSnapshot} from 'angularfire2/database';
import { Quote } from '../shared/quote.model';
@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  quotesFromFirebase: Observable<AngularFireAction<DatabaseSnapshot>[]>;
  randomQuote: string;

  constructor(private db: AngularFireDatabase) {
    this.quotesFromFirebase = db.list('/quotes', entries =>
      entries.child('/qid5')).snapshotChanges();
  }

  ngOnInit() {
    console.log(this.quotesFromFirebase);
  }

}
