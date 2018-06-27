import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class QuotesService {
  public selectedBookId = '';
  public isBookSelected = false;
  public bookSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
}
