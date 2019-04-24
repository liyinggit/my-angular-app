import { ID } from '@datorama/akita';

export interface Prefecture {
  id: ID;
  loading: boolean;
  error: any;
}

export function createPrefecture(params: Partial<Prefecture>) {
  return {
      
  } as Prefecture;
}
