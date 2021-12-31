import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import GalleryImage from '../shared/gallery-image';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Lightbox } from 'ngx-lightbox';
import { LightboxImage } from '../shared/lightbox-image';
import { animate, style } from '@angular/animations';

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
    private lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.masonryOptions = {
      horizontalOrder: true,
      resize: true,
      gutter: 20,
      fitWidth: true,
      columnWidth: THUMB_SIZE,
      animations: {
        show: [
          style({opacity: 0}),
          animate('300ms ease-in', style({opacity: 1})),
        ],
        hide: [
          style({opacity: '*'}),
          animate('300ms ease-in', style({opacity: 0})),
        ]
      },
    };
    this.route.params.subscribe(params => {
      if(params.gallery){
        this.gallery = this.galleryService.getGalleryByRoute(params.gallery);
        this.lightboxImages = this.gallery.getLightboxImages(THUMB_SIZE);
      }else if(this.route.snapshot.url[0] || this.route.snapshot.url[0].path === 'art'){
        this.gallery = this.galleryService.getGalleryByRoute('art');
        this.lightboxImages = this.gallery.getLightboxImages(THUMB_SIZE);
      }
    });
  }

  openLightbox(idx: number){
    this.lightbox.open(this.lightboxImages, idx);
  }

}
