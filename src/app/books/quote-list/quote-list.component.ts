import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { QuotesService } from '../quotes.service';
import { Quote } from '../../shared/quote.model';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class CardListComponent implements OnInit {
  quotesFromFirebase: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(private db: AngularFireDatabase, private quoteService: QuotesService) {
    this.quotesFromFirebase = db.list('/quotes').snapshotChanges();
    this.quoteService.bookSelected.subscribe((bookid: string) => {
      this.quotesFromFirebase = db.list<Quote>('quotes', entries =>
      entries.orderByChild('bookid').equalTo(bookid))
      .snapshotChanges();
      console.log('from cardlist component ' + bookid);
    });
  }

  ngOnInit() {
  }

}
