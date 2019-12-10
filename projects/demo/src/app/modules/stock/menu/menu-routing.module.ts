import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ItemsModule } from '../items/items.module';
import { CONFIG } from '../../../config/config';

const CATEGORY = CONFIG.TYPE.STOCK.MENU.CATEGORY.LINK;
const DESSERTS = CONFIG.TYPE.STOCK.MENU.CATEGORY.DESSERTS.LINK;
const FEATURED = CONFIG.TYPE.STOCK.MENU.CATEGORY.FEATURED.LINK;
const DINNER_CLASSICS = CONFIG.TYPE.STOCK.MENU.CATEGORY.DINNER_CLASSICS.LINK;
const SLAMS = CONFIG.TYPE.STOCK.MENU.CATEGORY.SLAMS.LINK;
const STEAKS_AND_SEAFOOD = CONFIG.TYPE.STOCK.MENU.CATEGORY.STEAKS_AND_SEAFOOD.LINK;
const BURGERS = CONFIG.TYPE.STOCK.MENU.CATEGORY.BURGERS.LINK;

const routes: Routes = [
  { path: '', component: MenuComponent, pathMatch: 'full' },
  { path: `${CATEGORY}/:id`, loadChildren: () => ItemsModule, data: { type: CONFIG.TYPE.TEXT_EDITOR } },
  { path: `${CATEGORY}/${FEATURED}`, loadChildren: () => ItemsModule, data: {} },
  { path: `${CATEGORY}/${DESSERTS}`, loadChildren: () => ItemsModule, data: {} },
  { path: `${CATEGORY}/${DINNER_CLASSICS}`, loadChildren: () => ItemsModule, data: {} },
  { path: `${CATEGORY}/${SLAMS}`, loadChildren: () => ItemsModule, data: {} },
  { path: `${CATEGORY}/${STEAKS_AND_SEAFOOD}`, loadChildren: () => ItemsModule, data: {} },
  { path: `${CATEGORY}/${BURGERS}`, loadChildren: () => ItemsModule, data: {} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
