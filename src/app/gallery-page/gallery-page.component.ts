import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import { ImageService } from '../shared/image.service';
import GalleryImage from '../shared/gallery-image';

@Component({
  selector: 'jc-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  gallery: Gallery;
  headerImage: GalleryImage;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private imageService: ImageService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.gallery){
        this.gallery = this.galleryService.getGalleryByRoute(params.gallery);
        this.headerImage = this.imageService.getScenicImage(this.gallery.galleryKey);
        console.log(this.headerImage);
      }
    });
  }

}
