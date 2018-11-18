import GALLERY from './gallery-enum';
import GalleryImage from './gallery-image';
import { LightboxImage } from './lightbox-image';



export default class Gallery {
  galleryKey: GALLERY;
  galleryUris: string[];
  title: string;
  image: GalleryImage;
  route: string;
  organization: string;
  credit: string;
  description: string[];
  year: string;
  location: string;
  constructor(
    galleryKey: GALLERY,
    galleryUris: string[],
    title: string, 
    route: string, 
    organization: string,
    credit: string,
    description: string[],
    year: string,
    location: string,
  ){
    this.galleryKey = galleryKey;
    this.galleryUris = galleryUris;
    this.title = title;
    this.route = route;
    this.organization = organization;
    this.credit = credit;
    this.description = description;
    this.year = year;
    this.location = location;
  }

  setImage(image: GalleryImage){
    this.image = image;
  }

  getLightboxImages(thumbWidth: number){
    return this.galleryUris.map(uri => 
      new LightboxImage(uri, Gallery.getWidthUri(uri, thumbWidth))
    );
  }

  static getWidthUri(uri:string, width: number){
    //strip any existing options,
    // add width query parameter provided
    return `${uri.split('?')[0]}?width=${width}`;
  }

  hasDetail(){
    return this.title.length
      || this.organization.length
      || this.credit.length
      || this.description.length
      || this.year.length
      || this.location.length;
  }

}
