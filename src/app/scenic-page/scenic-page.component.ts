import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import Gallery from '../shared/gallery';
import { GalleryService } from '../shared/gallery.service';
import { animate, style } from '@angular/animations';
import { JcdService } from '../shared/jcd.service';
import { JcdProject } from '../shared/jcd-entities';

@Component({
  selector: 'jc-scenic-page',
  templateUrl: './scenic-page.component.html',
  styleUrls: ['./scenic-page.component.scss']
})
export class ScenicPageComponent implements OnInit {
  galleries: Gallery[];
  masonryOptions: NgxMasonryOptions;
  jcdProjects: JcdProject[];

  constructor(
    private galleryService: GalleryService,
    private jcdService: JcdService
  ) { }

  ngOnInit() {
    this.jcdService.getProjects().then(projects => {
      this.jcdProjects = projects;
    });
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
  }

}
