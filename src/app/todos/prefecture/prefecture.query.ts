import { Injectable } from '@angular/core';
import { QueryEntity,QueryConfig,Order } from '@datorama/akita';
import { PrefectureStore, PrefectureState } from './prefecture.store';
import { Prefecture } from './prefecture.model';

//QueryConfig排序
@Injectable({ providedIn: 'root' })
@QueryConfig({sortBy:'price',sortByOrder:Order.ASC})
export class PrefectureQuery extends QueryEntity<PrefectureState, Prefecture> {

  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  constructor(protected store: PrefectureStore) {
    super(store);
  }


}
