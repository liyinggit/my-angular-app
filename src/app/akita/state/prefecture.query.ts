import { QueryEntity } from '@datorama/akita';
import { PrefectureStore, PrefectureState, prefectureStore } from './prefecture.store';
import { Prefecture } from './prefecture.model';

export class PrefectureQuery extends QueryEntity<PrefectureState, Prefecture> {

  constructor(protected store: PrefectureStore) {
    super(store);
  }

}

export const prefectureQuery = new PrefectureQuery(prefectureStore);
