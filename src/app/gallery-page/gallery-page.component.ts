import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import GalleryImage from '../shared/gallery-image';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Lightbox } from 'ngx-lightbox';
import { LightboxImage } from '../shared/lightbox-image';
import { animate, style } from '@angular/animations';
import { JcdService } from '../shared/jcd.service';
import { JcdProject, JcdProjectPage } from '../shared/jcd-entities';

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
  jcdProject: JcdProject;
  jcdProjectPage: JcdProjectPage;
  displayDate: string;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private lightbox: Lightbox,
    private jcdService: JcdService,
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
      if(params.gallery) {
        this.getProjectInfo(params.gallery).then(res => {
          this.jcdProject = res.scenicProject;
          this.jcdProjectPage = res.sceniceProjectPage;
          this.displayDate = this.jcdService.getDisplayDate(this.jcdProjectPage.projectDetails);
          this.lightboxImages = this.jcdProjectPage.galleryImageUris.map(galleryImageUri => {
            let fullUri: string, resizeUri: string;
            fullUri = this.jcdService.getImageUri(galleryImageUri);
            resizeUri = this.jcdService.getResizedUri({
              uri: fullUri,
              width: THUMB_SIZE,
            });
            return new LightboxImage(fullUri, resizeUri);
          });
        });
      } else if(this.route.snapshot.url[0] || this.route.snapshot.url[0].path === 'art'){
        this.gallery = this.galleryService.getGalleryByRoute('art');
        this.lightboxImages = this.gallery.getLightboxImages(THUMB_SIZE);
      }
    });
  }

  openLightbox(idx: number){
    this.lightbox.open(this.lightboxImages, idx);
  }

  async getProjectInfo(projectRoute: string) {
    let nextScenicProject: JcdProject, nextScenicProjectPage: JcdProjectPage;
    nextScenicProject = await this.jcdService.getProject(projectRoute);
    nextScenicProjectPage = await this.jcdService.getProjectPage(nextScenicProject.projectKey);
    return {
      scenicProject: nextScenicProject,
      sceniceProjectPage: nextScenicProjectPage,
    };
  }

  hasOriginalCredits() {
    if(!this.jcdProjectPage) {
      return false;
    }
    return this.jcdProjectPage?.projectDetails?.originalCredits?.length > 0;
  }
  hasMedia() {
    if(!this.jcdProjectPage) {
      return false;
    }
    return this.jcdProjectPage?.projectDetails?.mediaAndPress?.length > 0;
  }

}
