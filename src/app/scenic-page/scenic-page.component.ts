import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import GALLERY from '../shared/gallery-enum';

const SCENIC_GALLERIES = [
  GALLERY.JAMES_AND_THE_GIANT_PEACH,
  GALLERY.CINDERELLA,
  GALLERY.SWEENEY,
  GALLERY.URINETOWN,
  GALLERY.TAMINGOFTHESHREW,
  GALLERY.MRBURNS,
  GALLERY.LARAMIE,
  GALLERY.THE_DRAG,
  GALLERY.NEXT_FALL,
  GALLERY.AGAMEMNON,
  GALLERY.TRIBES,
  GALLERY.FAT_PIG,
  GALLERY.UVU,
  GALLERY.SUNDANCE,
  GALLERY.RENAISSANCE_NOW,
  GALLERY.CABARET,
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
    };
    this.galleries = SCENIC_GALLERIES.map(galleryKey => {
      return this.galleryService.getGallery(galleryKey);
    });
  }

}
