import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PrefectureStore, PrefectureState } from './prefecture.store';
import { Prefecture } from './prefecture.model';

@Injectable({ providedIn: 'root' })
export class PrefectureQuery extends QueryEntity<PrefectureState, Prefecture> {

  constructor(protected store: PrefectureStore) {
    super(store);
  }

}
