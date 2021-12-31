import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import GALLERY from '../shared/gallery-enum';
import { animate, style } from '@angular/animations';

const SCENIC_GALLERIES = [
  GALLERY.JAMES_AND_THE_GIANT_PEACH,
  GALLERY.CINDERELLA,
  GALLERY.SWEENEY,
  GALLERY.URINETOWN,
  GALLERY.MRBURNS,
  GALLERY.LARAMIE,
  GALLERY.THE_DRAG,
  GALLERY.NEXT_FALL,
  GALLERY.AGAMEMNON,
  GALLERY.TRIBES,
  GALLERY.FAT_PIG,
  GALLERY.UVU,
  GALLERY.SUNDANCE,
  GALLERY.CABARET,
  GALLERY.TAMINGOFTHESHREW,
  // GALLERY.RENAISSANCE_NOW,
  // GALLERY.BYU,
  // GALLERY.RENAISSANCE_FAIRE,
];

@Component({
  selector: 'jc-scenic-page',
  templateUrl: './scenic-page.component.html',
  styleUrls: ['./scenic-page.component.scss']
})
export class ScenicPageComponent implements OnInit {
  galleries: Gallery[];
  masonryOptions: NgxMasonryOptions;

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.masonryOptions = {
      horizontalOrder: true,
      resize: true,
      gutter: 20,
      fitWidth: true,
      columnWidth: 350,
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
    this.galleries = SCENIC_GALLERIES.map(galleryKey => {
      return this.galleryService.getGallery(galleryKey);
    });
  }

}
