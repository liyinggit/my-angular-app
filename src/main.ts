import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableAkitaProdMode } from '@datorama/akita';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();  // 在开发模式下设置，一遍正常使用store
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
