import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AuthorsService {
  public selectedAuthorName = '';
  public selectedAuthorId = '';
  public isAuthorSelected = false;
  public authorSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
}
