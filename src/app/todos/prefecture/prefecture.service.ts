import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PrefectureStore } from './prefecture.store';
import { HttpClient } from '@angular/common/http';
import { VISIBILITY_FILTER } from '../filter/filter.model';

@Injectable({ providedIn: 'root' })
export class PrefectureService {

  constructor(private prefectureStore: PrefectureStore,
              private http: HttpClient) {
  }

  //更新扩展属性，使用update（）方法
  updateFilter(filter:VISIBILITY_FILTER){
  
    this.prefectureStore.updateFilter(filter)

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
