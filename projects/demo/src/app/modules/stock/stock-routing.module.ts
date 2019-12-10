import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';
import { ItemsModule } from './items/items.module';
import { CONFIG } from '../../config/config';
import { MainComponent } from './components/main/main.component';
import { ItemModule } from './items/item/item.module';
import { MenuModule } from './menu/menu.module';

const MENU = CONFIG.TYPE.STOCK.MENU.LINK;
const FOOD = CONFIG.TYPE.STOCK.FOOD.LINK;

const routes: Routes = [
  { path: '', component: StockComponent, redirectTo: `${MENU}`, pathMatch: 'full' },
  { path: MENU, loadChildren: () => MenuModule, data: { type: CONFIG.TYPE.TEXT_EDITOR } },
  {
    path: FOOD, component: MainComponent,
    // children: [
    //   { path: ':id', loadChildren: () => ItemModule  },
    //   // { path: '**', redirectTo: '/food', pathMatch: 'full' },
    // ]
  },
  //  { path: ':id', loadChildren: () => ItemModule }, `${CONFIG.TYPE.STOCK.FOOD.LINK}/:id`
  { path: `${FOOD}/:id`, loadChildren: () => ItemModule, data: { type: CONFIG.TYPE.TEXT_EDITOR } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
