import { IAlbum } from "ngx-lightbox";

export class LightboxImage implements IAlbum{
  src: string;
  caption?: string;
  thumb: string;
  constructor(src: string, thumb:string = '', caption?:string){
    this.src = src;
    this.thumb = thumb;
    this.caption = caption;
  }
}
