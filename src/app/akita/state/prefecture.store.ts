import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Prefecture } from './prefecture.model';

export interface PrefectureState extends EntityState<Prefecture> {}

@StoreConfig({ name: 'prefecture' })
export class PrefectureStore extends EntityStore<PrefectureState, Prefecture> {

  constructor() {
    super();
  }

}

export const prefectureStore = new PrefectureStore();

