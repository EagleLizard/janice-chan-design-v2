import { Component, OnInit } from '@angular/core';
import imageUris from 'src/app/shared/image-uris';
import { Request, RequestOptions } from '@angular/http';
import { NavService, LINKS } from '../shared/nav.service';

@Component({
  selector: 'jc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  headerImg: string;
  links = LINKS;

  constructor(
    private navService: NavService
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
    console.log('side menu button clicked');
    this.navService.toggle();
  }

}
