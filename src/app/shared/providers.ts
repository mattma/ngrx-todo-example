import { provideStore } from '@ngrx/store';
import reducers from './reducers';

export const STORE_PROVIDERS = provideStore(reducers);
