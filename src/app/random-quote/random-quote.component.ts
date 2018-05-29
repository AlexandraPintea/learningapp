import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import { Quote } from '../books/card-list/quote.model';
@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  quotesFromFirebase: Observable<any[]>;
  randomQuote: string;
  
  constructor(private db:AngularFireDatabase) { 
    this.quotesFromFirebase = db.list('/quotes').valueChanges();
  }

  ngOnInit() {
  }

}
