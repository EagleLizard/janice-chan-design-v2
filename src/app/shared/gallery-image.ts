import { Observable } from 'rxjs';
import GALLERY from './gallery-enum';

export default class GalleryImage {
  uri: string;
  width: number;
  height: number;
  galleryKey: GALLERY;
  private imgElem: HTMLImageElement;
  
  constructor(uri: string, galleryKey: GALLERY) {
    this.uri = uri;
    this.galleryKey = galleryKey;
  }

  load(): Observable<GalleryImage>{
    return new Observable((observer)=>{
      let img: HTMLImageElement, self: GalleryImage;
      self = this;
      if(self.imgElem !== undefined){
        observer.next(self);
        return;
      }
      img = new Image;
      img.onload = function(){
        let _img: HTMLImageElement;
        _img = <HTMLImageElement>this;
        self.width = _img.width;
        self.height = _img.height;
        self.imgElem = img;
        observer.next(self);
      }
      img.src = this.uri;
    });
  }

  static copy(galleryImage: GalleryImage){
    return new GalleryImage(galleryImage.uri, galleryImage.galleryKey);
  }

}
