import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CONFIG } from '../../demo/src/app/config/config';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,  `assets/i18n-${CONFIG.NAME_PROJECT}/`);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class VSTranslateModule { }
