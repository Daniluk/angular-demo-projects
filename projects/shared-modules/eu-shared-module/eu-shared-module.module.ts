import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyProxyPipe } from '../currency-proxy.pipe';
import { EuSharedModuleComponent } from './eu-shared-module.component';
import { EuSharedModuleService } from './eu-shared-module.service';


@NgModule({
  declarations: [EuSharedModuleComponent, CurrencyProxyPipe],
  imports: [
    CommonModule
  ],
  exports: [CurrencyProxyPipe],
  providers: [EuSharedModuleService]
})
export class EuSharedModuleModule { }
