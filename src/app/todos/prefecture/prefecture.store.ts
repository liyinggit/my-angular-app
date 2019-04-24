import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Prefecture } from './prefecture.model';
import { VISIBILITY_FILTER } from '../filter/filter.model';

export interface PrefectureState extends EntityState<Prefecture> {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}

//要显示的范围
const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'prefecture' })
export class PrefectureStore extends EntityStore<PrefectureState, Prefecture> {

  constructor() {
    super(initialState);
  }


  updateFilter(filter: VISIBILITY_FILTER) {
    this.update({ ui: { filter } } )
  }
}