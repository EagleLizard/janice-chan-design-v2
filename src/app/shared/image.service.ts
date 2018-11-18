import { Injectable } from '@angular/core';
import imageUris from './image-uris';
import GalleryImage from './gallery-image';
import GALLERY from './gallery-enum';
import { Observable, combineLatest } from 'rxjs';

const SCENIC_IMAGES = [
  new GalleryImage(
    imageUris.THE_DRAG,
    GALLERY.THE_DRAG,
  ),
  new GalleryImage(
    imageUris.NEXT_FALL,
    GALLERY.NEXT_FALL,
  ),
  new GalleryImage(
    imageUris.AGAMEMNON,
    GALLERY.AGAMEMNON,
  ),
  new GalleryImage(
    imageUris.TRIBES,
    GALLERY.TRIBES,
  ),
  new GalleryImage(
    imageUris.FAT_PIG,
    GALLERY.FAT_PIG,
  ),
  new GalleryImage(
    imageUris.UVU,
    GALLERY.UVU,
  ),
  new GalleryImage(
    imageUris.SUNDANCE,
    GALLERY.SUNDANCE,
  ),
  new GalleryImage(
    imageUris.RENAISSANCE_NOW,
    GALLERY.RENAISSANCE_NOW,
  ),
  new GalleryImage(
    imageUris.BYU,
    GALLERY.BYU,
  ),
  new GalleryImage(
    imageUris.RENAISSANCE_FAIRE,
    GALLERY.RENAISSANCE_FAIRE,
  ),
  new GalleryImage(
    imageUris.CABARET,
    GALLERY.CABARET,
  )
];

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
    
  }

  getScenicImage(key: GALLERY, width?: number){
    let foundImage = SCENIC_IMAGES.find(image => {
      return image.galleryKey === key;
    });
    if(foundImage === undefined){
      // throw new Error(`Image not found for key ${key}`); 
      return undefined;
    }
    if(width !== undefined){
      foundImage = GalleryImage.copy(foundImage);
      foundImage.uri = `${foundImage.uri}?width=${width}`;
    }
    return foundImage;
  }

  getScenicImages(width?: number){
    return SCENIC_IMAGES.map(image=>{
      if(width !== undefined){
        // make a copy with a new URI
        image = GalleryImage.copy(image);
        image.uri = `${image.uri}?width=${width}`;
      }
      return image;
    });
  }
}
