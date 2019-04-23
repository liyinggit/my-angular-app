import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PrefectureStore } from './prefecture.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PrefectureService {

  constructor(private prefectureStore: PrefectureStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.prefectureStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.prefectureStore.add(entity);
    // });
  }

}
