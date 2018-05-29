import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class QuotesService {
  public bookSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
}