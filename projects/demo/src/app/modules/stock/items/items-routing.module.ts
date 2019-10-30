import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemModule } from './item/item.module';

const routes: Routes = [
  { path: '', component: ItemsComponent, pathMatch: 'full' },
  { path: ':id', loadChildren: () => ItemModule },
  // path: 'menu', loadChildren: () => ItemsModule, data: { type: CONFIG.TYPE.TEXT_EDITOR }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
