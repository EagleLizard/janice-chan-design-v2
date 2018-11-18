import { 
  Component, 
  OnInit, 
  Input,
} from '@angular/core';
import GalleryPage from 'src/app/shared/gallery-page';

@Component({
  selector: 'jc-page-tile',
  templateUrl: './page-tile.component.html',
  styleUrls: ['./page-tile.component.scss']
})
export class PageTileComponent implements OnInit {

  @Input() galleryPage: GalleryPage;

  constructor() { }

  ngOnInit() {
    console.log(this.galleryPage);
  }

}
