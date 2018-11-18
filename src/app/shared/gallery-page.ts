import GALLERY from './gallery-enum';
import GalleryImage from './gallery-image';

export default class GalleryPage {
  galleryKey: GALLERY;
  title: string;
  image: GalleryImage;
  constructor(galleryKey: GALLERY, title: string){
    this.galleryKey = galleryKey;
    this.title = title;
  }

  setImage(image: GalleryImage){
    this.image = image;
  }
}
