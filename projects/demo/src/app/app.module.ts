import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VSTranslateModule } from 'projects/shared-modules/translate/vs-translate.module';

// List of providers
const providers = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    VSTranslateModule,
    LayoutModule,
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class DemoSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    };
  }
}

