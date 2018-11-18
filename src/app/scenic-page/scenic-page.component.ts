import { Component, OnInit } from '@angular/core';
import GalleryImage from '../shared/gallery-image';
import { NgxMasonryOptions } from 'ngx-masonry';
import GalleryPage from '../shared/gallery-page';
import { GalleryPageService } from '../shared/gallery-page.service';
import GALLERY from '../shared/gallery-enum';

const SCENIC_GALLERIES = [
  GALLERY.THE_DRAG,
  GALLERY.NEXT_FALL,
  GALLERY.AGAMEMNON,
  GALLERY.TRIBES,
  GALLERY.FAT_PIG,
  GALLERY.UVU,
  GALLERY.SUNDANCE,
  GALLERY.RENAISSANCE_NOW,
  GALLERY.BYU,
  GALLERY.CABARET,
];

@Component({
  selector: 'jc-scenic-page',
  templateUrl: './scenic-page.component.html',
  styleUrls: ['./scenic-page.component.scss']
})
export class ScenicPageComponent implements OnInit {
  galleryPages: GalleryPage[];
  masonryOptions: NgxMasonryOptions;

  constructor(
    private galleryPageService: GalleryPageService
  ) { }

  ngOnInit() {
    this.masonryOptions = {
      horizontalOrder: true,
      resize: true,
      gutter: 20,
      fitWidth: true,
      columnWidth: 350
    };
    this.galleryPages = SCENIC_GALLERIES.map(galleryKey => {
      return this.galleryPageService.getPage(galleryKey);
    });
  }

}
