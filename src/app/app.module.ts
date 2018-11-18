import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry'
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ScenicPageComponent } from './scenic-page/scenic-page.component';
import { ArtPageComponent } from './art-page/art-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PageTileComponent } from './scenic-page/page-tile/page-tile.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';

const icons = [
  faBars
];

icons.forEach(icon => library.add(icon));

const MatComponents = [
  MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ScenicPageComponent,
    ArtPageComponent,
    AboutPageComponent,
    PageTileComponent,
    GalleryPageComponent,
    ContactFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ...MatComponents,
    NgxMasonryModule,
    LightboxModule
  ],
  exports: [
    ...MatComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
