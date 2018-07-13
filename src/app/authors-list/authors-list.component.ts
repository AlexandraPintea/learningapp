import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAction, AngularFireDatabase, DatabaseSnapshot} from 'angularfire2/database';
import {Author} from './author.model';
import { Router } from '@angular/router';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
  providers: [AuthorsService]
})
export class AuthorsListComponent implements OnInit {
  authorsFromFirebase: Observable<AngularFireAction<DatabaseSnapshot>[]>;
  constructor(private db: AngularFireDatabase, private router: Router) {
    this.authorsFromFirebase = db.list<Author>('authors').snapshotChanges();
  }

  readMore(author: Author) {
    // this.router.navigateByUrl('/book/' + bookid);
    this.router.navigate(['authors', author.id]); // builds the same route as above
  }
  ngOnInit() {
  }

}
