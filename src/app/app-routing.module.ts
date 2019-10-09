import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSharedModule } from '../../projects/demo/src/app/app.module';

const routes: Routes = [];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    DemoSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
