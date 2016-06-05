import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { STORE_PROVIDERS } from './app/shared';
import { NgrxTodoAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxTodoAppComponent, [
  STORE_PROVIDERS,
  // EFFECTS_PROVIDERS
]);

