import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenicPageComponent } from './scenic-page/scenic-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ArtPageComponent } from './art-page/art-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scenic'
  },
  {
    path: 'scenic',
    component: ScenicPageComponent
  },
  {
    path: 'scenic/:gallery',
    component: GalleryPageComponent
  },
  {
    path: 'art',
    component: GalleryPageComponent
  },
  {
    path: 'janice',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
