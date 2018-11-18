import { Injectable } from '@angular/core';

import GALLERY from './gallery-enum';
import GalleryPage from './gallery-page';
import { ImageService } from './image.service';

const GALLERY_PAGES: GalleryPage[] = [
  new GalleryPage(
    GALLERY.THE_DRAG,
    'The Drag',
  ),
  new GalleryPage(
    GALLERY.CABARET,
    'Cabaret',
  ),
  new GalleryPage(
    GALLERY.NEXT_FALL,
    'Next Fall',
  ),
  new GalleryPage(
    GALLERY.AGAMEMNON,
    'Agamemnon',
  ),
  new GalleryPage(
    GALLERY.TRIBES,
    'Tribes',
  ),
  new GalleryPage(
    GALLERY.FAT_PIG,
    'Fat Pig',
  ),
  new GalleryPage(
    GALLERY.UVU,
    'A Year with Frog & Toad',
  ),
  new GalleryPage(
    GALLERY.SUNDANCE,
    'Joseph and the Amazing Technicolor Dreamcoat',
  ),
  new GalleryPage(
    GALLERY.RENAISSANCE_NOW,
    'The Taming of the Shrew',
  ),
  new GalleryPage(
    GALLERY.BYU,
    'Hamlet',
  ),
  new GalleryPage(
    GALLERY.RENAISSANCE_FAIRE,
    'Utah Renaissance Faire',
  ),
];

@Injectable({
  providedIn: 'root'
})
export class GalleryPageService {
  constructor(
    private imageService: ImageService
  ) { }
  getPage(galleryKey: GALLERY): GalleryPage{
    let foundPage = GALLERY_PAGES.find(page => {
      return page.galleryKey === galleryKey;
    });
    if(foundPage === undefined){
      throw new Error(`No page found for key ${galleryKey}`);
    }
    foundPage.setImage(this.imageService.getScenicImage(galleryKey, 350));
    return foundPage;
  }
}
