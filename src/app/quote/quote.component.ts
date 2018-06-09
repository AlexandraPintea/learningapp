import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class CardComponent implements OnInit {
  @Input() quoteInput: string;
  @Input() carddate = '';

  constructor() { }

  ngOnInit() {
  }

}
