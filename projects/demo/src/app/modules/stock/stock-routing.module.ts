import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';
import { ItemsModule } from './items/items.module';
import { CONFIG } from '../../config/config';
import { MainComponent } from './components/main/main.component';
import { ItemModule } from './items/item/item.module';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  {
    path: '', component: StockComponent, redirectTo: 'menu', pathMatch: 'full'
  },
  {
    path: 'menu', loadChildren: () => MenuModule, data: { type: CONFIG.TYPE.TEXT_EDITOR }
  },
  {
    path: 'food', component: MainComponent,
    // children: [
    //   { path: ':id', loadChildren: () => ItemModule  },
    //   // { path: '**', redirectTo: '/food', pathMatch: 'full' },
    // ]
  },
  //  { path: ':id', loadChildren: () => ItemModule },
  {
    path: 'food/:id', loadChildren: () => ItemModule, data: { type: CONFIG.TYPE.TEXT_EDITOR }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
