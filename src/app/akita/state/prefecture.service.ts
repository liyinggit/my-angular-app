import { ID } from '@datorama/akita';
import { PrefectureStore, prefectureStore } from './prefecture.store';

export class PrefectureService {

  constructor(private prefectureStore: PrefectureStore) {
  }

}

export const prefectureService = new PrefectureService(prefectureStore);