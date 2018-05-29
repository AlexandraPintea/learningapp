import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [QuotesService]
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
