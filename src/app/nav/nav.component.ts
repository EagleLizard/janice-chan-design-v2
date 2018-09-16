import { Component, OnInit } from '@angular/core';
import imageUris from 'src/app/shared/image-uris';
import { Request, RequestOptions } from '@angular/http';

interface LinkObj { title: string; route: string; }

const LINKS: LinkObj[] = [
  {
    title: 'scenic',
    route: '/scenic'
  },
  {
    title: 'art',
    route: '/art'
  },
  {
    title: 'janice',
    route: '/janice'
  }
];

@Component({
  selector: 'jc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  headerImg: string;
  links: LinkObj[];

  constructor(

  ) { }

  ngOnInit() {
    let request: Request, options: RequestOptions;
    options = new RequestOptions({
      url: imageUris.LOGO,
      method: 'GET',
      params: {
        width: 183
      }
    });
    request = new Request(options);
    this.headerImg = request.url;
    this.links = LINKS;
  }

  onMenuButtonClick() {
    console.log('menu button clicked');
  }

}
