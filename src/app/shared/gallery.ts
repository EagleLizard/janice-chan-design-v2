import GALLERY from './gallery-enum';
import GalleryImage from './gallery-image';
import { LightboxImage } from './lightbox-image';

export interface MediaAndPressDetail {
  description?: string;
  link?: {
    label: string;
    uri: string;
  };
  publication: string;
}

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
  mediaAndPress: MediaAndPressDetail[];
  originalCredits: string[];

  constructor(
    galleryKey: GALLERY,
    galleryUris: string[],
    title: string, 
    route: string, 
    organization: string,
    credit: string,
    description: string[],
    year: string,
    mediaAndPress?: MediaAndPressDetail[],
    originalCredits?: string[],
  ){
    this.galleryKey = galleryKey;
    this.galleryUris = galleryUris;
    this.title = title;
    this.route = route;
    this.organization = organization;
    this.credit = credit;
    this.description = description;
    this.year = year;
    this.mediaAndPress = mediaAndPress ?? [];
    this.originalCredits = originalCredits ?? [];
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
    ;
  }

  hasOriginalCredits() {
    return this.originalCredits.length > 0;
  }

  hasMedia() {
    return this.mediaAndPress.length > 0;
  }

}
