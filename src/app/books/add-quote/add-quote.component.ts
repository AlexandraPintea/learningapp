import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../../shared/quote.model';
import {QuotesService} from '../quotes.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  newContent: string;
  quotesFromFirebase: Observable<any[]>;

  constructor(private db: AngularFireDatabase,  public quoteService: QuotesService) {
    this.quotesFromFirebase = db.list('/quotes').valueChanges();
  }

  onQuoteAdded(db: AngularFireDatabase) {

    const quote = new Quote(this.newContent, this.quoteService.selectedBookId);

    this.db.list('/quotes').push(quote);
  }
  ngOnInit() {
  }

}
