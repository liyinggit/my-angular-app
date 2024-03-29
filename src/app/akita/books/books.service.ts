import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { BooksStore } from './books.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(private booksStore: BooksStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.booksStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.booksStore.add(entity);
    // });
  }

}
