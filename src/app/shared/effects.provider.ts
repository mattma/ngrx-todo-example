import { runEffects } from '@ngrx/effects';
import { BookEffects } from '../+todo/shared/effects/todo';

export const EFFECTS_PROVIDERS = runEffects([
  BookEffects
]);
