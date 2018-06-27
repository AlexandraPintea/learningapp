import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {
  @Input() quoteInput: string;
  @Input() carddate = '';

  constructor() { }

  ngOnInit() {
  }

}
