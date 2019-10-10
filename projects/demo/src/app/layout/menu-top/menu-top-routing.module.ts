import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTopComponent } from './menu-top.component';

const routes: Routes = [
  { path: '', component: MenuTopComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuTopRoutingModule { }
