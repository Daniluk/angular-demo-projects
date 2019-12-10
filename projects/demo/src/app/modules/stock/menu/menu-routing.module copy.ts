import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ItemsModule } from '../items/items.module';
import { CONFIG } from '../../../config/config';

const CATEGORY = CONFIG.TYPE.STOCK.MENU.CATEGORY.LINK;
const DESSERTS = CONFIG.TYPE.STOCK.MENU.CATEGORY.DESSERTS.LINK;
const FEATURED = CONFIG.TYPE.STOCK.MENU.CATEGORY.FEATURED.LINK;

const routes: Routes = [
  { path: '', component: MenuComponent, pathMatch: 'full' },
  { path: 'category/:id', loadChildren: () => ItemsModule, data: { type: CONFIG.TYPE.TEXT_EDITOR } },
  {
    path: `${CATEGORY}/${FEATURED}`, loadChildren: () => ItemsModule, data: {
      type: {
        NAME: 'featured',
        LINK: 'featured'
      }
    }
  },
  {
    path: `${CATEGORY}/${DESSERTS}`, loadChildren: () => ItemsModule, data: {
      type: {
        NAME: 'desserts',
        LINK: 'desserts'
      }
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
