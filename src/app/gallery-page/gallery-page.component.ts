import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import { ImageService } from '../shared/image.service';
import GalleryImage from '../shared/gallery-image';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Lightbox } from 'ngx-lightbox';
import { LightboxImage } from '../shared/lightbox-image';

const THUMB_SIZE = 350;

@Component({
  selector: 'jc-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  gallery: Gallery;
  headerImage: GalleryImage;
  masonryOptions: NgxMasonryOptions;
  lightboxImages: LightboxImage[];

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private imageService: ImageService,
    private lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.masonryOptions = {
      horizontalOrder: true,
      resize: true,
      gutter: 20,
      fitWidth: true,
      columnWidth: THUMB_SIZE
    };
    this.route.params.subscribe(params => {
      if(params.gallery){
        this.gallery = this.galleryService.getGalleryByRoute(params.gallery);
        this.lightboxImages = this.gallery.getLightboxImages(THUMB_SIZE);
        this.headerImage = this.imageService.getScenicImage(this.gallery.galleryKey);
      }
    });
  }

  openLightbox(idx: number){
    this.lightbox.open(this.lightboxImages, idx);
  }

}
