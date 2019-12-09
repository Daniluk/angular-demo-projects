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
import { TextEditorModule } from '../modules/text-editor/text-editor.module';
import { StockModule } from '../modules/stock/stock.module';
import { BooksModule } from '../modules/books/books.module';
import { MoviesModule } from '../modules/movies/movies.module';
import { CoursesModule } from '../modules/courses/courses.module';
import { JokesModule } from '../modules/jokes/jokes.module';

const nameProject = CONFIG.NAME_PROJECT;

const routes: Routes = [
  {
    path: '', redirectTo: nameProject, pathMatch: 'full',
  },
  {
    path: nameProject, component: MainLayoutComponent,
    children: [
      { path: `:lang`, component: MainComponent },
      { path: `:lang/${CONFIG.TYPE.TEXT_EDITOR.LINK}`, loadChildren: () => TextEditorModule, data: { type: CONFIG.TYPE.TEXT_EDITOR } },
      { path: `:lang/${CONFIG.TYPE.STOCK.LINK}`, loadChildren: () => StockModule, data: { type: CONFIG.TYPE.STOCK } },
      { path: `:lang/${CONFIG.TYPE.BOOKS.LINK}`, loadChildren: () => BooksModule, data: { type: CONFIG.TYPE.BOOKS } },
      { path: `:lang/${CONFIG.TYPE.MOVIES.LINK}`, loadChildren: () => MoviesModule, data: { type: CONFIG.TYPE.MOVIES } },
      { path: `:lang/${CONFIG.TYPE.COURSES.LINK}`, loadChildren: () => CoursesModule, data: { type: CONFIG.TYPE.COURSES } },
      { path: `:lang/${CONFIG.TYPE.JOKES.LINK}`, loadChildren: () => JokesModule, data: { type: CONFIG.TYPE.JOKES } },
      { path: '**', redirectTo: `${nameProject}/en`, pathMatch: 'full' },

    ]
  },
  {
    path: `${nameProject}/**`, redirectTo: `${nameProject}/en`,
  },
  { path: '**', redirectTo: `${nameProject}/en` },
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
