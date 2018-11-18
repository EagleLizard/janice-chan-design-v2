import GALLERY from './gallery-enum';
import GalleryImage from './gallery-image';



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
}
