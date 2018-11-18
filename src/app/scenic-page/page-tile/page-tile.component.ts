import { 
  Component, 
  OnInit, 
  Input,
} from '@angular/core';
import Gallery from 'src/app/shared/gallery';

@Component({
  selector: 'jc-page-tile',
  templateUrl: './page-tile.component.html',
  styleUrls: ['./page-tile.component.scss']
})
export class PageTileComponent implements OnInit {

  @Input() gallery: Gallery;
  hoverClass: string;

  constructor() { }

  ngOnInit() {
    console.log(this.gallery);
  }

  hover(isHover: boolean){
    if(isHover){
      this.hoverClass = 'hovered';
    }else{
      this.hoverClass = '';
    }
  }

}
