import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../books/quote-list/quote.model';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  newQuote: string;
  newQuoteId: string;
  quotesFromFirebase: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.quotesFromFirebase = db.list('/quotes').valueChanges();
  }

  onQuoteAdded(db: AngularFireDatabase) {
    const quote = new Quote(this.newQuote, this.newQuoteId);
    this.db.list('/quotes').push(quote);
  }
  ngOnInit() {
  }

}
