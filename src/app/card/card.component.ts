import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() carddate: string='';
  cards: any[] = [
    { 
      authorName: "Mikhail Bulgakov",
      bookTitle: "Master and Margarita",
      quoteContent: "Yes, man is mortal, but that would be only half the trouble. The worst of it is that he's sometimes unexpectedly mortal—there's the trick!"
    },
    {
      authorName: "J.K. Rowling",
      bookTitle: "Harry Potter",
      quoteContent: "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light."
    },
    {
      authorName: "Harper Lee",
      bookTitle: "To kill a mockingbird",
      quoteContent: "Atticus told me to delete the adjectives and I'd have the facts."
    },
    {
      authorName: "Fyodor Dostoyevsky",
      bookTitle: "The Idiot",
      quoteContent: "Don’t let us forget that the causes of human actions are usually immeasurably more complex and varied than our subsequent explanations of them."
    },
    {
      authorName: "George R.R. Martin",
      bookTitle: "A game of thrones",
      quoteContent: "Some old wounds never truly heal, and bleed again at the slightest word"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
