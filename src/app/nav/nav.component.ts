import { Component, OnInit } from '@angular/core';
import imageUris from 'src/app/shared/image-uris';
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
    private navService: NavService,
  ) { }

  ngOnInit() {
    this.headerImg = `${imageUris.LOGO}?width=183`;
    this.links = LINKS;
  }

  onMenuButtonClick() {
    console.log('side menu button clicked');
    this.navService.toggle();
  }

}
