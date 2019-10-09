import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DemoMaterialModule } from '../../../../shared-modules/material-module';
import { CONFIG } from '../config/config';
import { MainComponent } from '../components/main/main.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
// import { CustomersModule } from '../modules/customers/customers.module';

const nameProject = CONFIG.NAME_PROJECT;

const routes: Routes = [
  {
    path: '', redirectTo: nameProject, pathMatch: 'full',
  },
  {
    path: nameProject, component: MainLayoutComponent,
    children: [
      { path: '', component: MainComponent },
      // { path: CONFIG.TYPE.CUSTOMERS.LINK, loadChildren: () => CustomersModule, data: { type: CONFIG.TYPE.CUSTOMERS } },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [RouterModule, DemoMaterialModule],
})
export class LayoutRoutingModule {

}
