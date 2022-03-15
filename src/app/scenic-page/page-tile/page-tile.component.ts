import { 
  Component, 
  OnInit, 
  Input,
} from '@angular/core';
import { JcdProject } from '../../shared/jcd-entities';
import { JcdService } from '../../shared/jcd.service';

@Component({
  selector: 'jc-page-tile',
  templateUrl: './page-tile.component.html',
  styleUrls: ['./page-tile.component.scss']
})
export class PageTileComponent implements OnInit {

  @Input() jcdProject: JcdProject;
  hoverClass: string;
  coverImageUri: string;

  constructor(
    private jcdService: JcdService,
  ) { }

  ngOnInit() {
    let resizedCoverImageUri: string;
    resizedCoverImageUri = this.jcdService.getResizedUri({
      uri: this.jcdService.getImageUri(this.jcdProject.coverImageUri),
      width: 350,
    });
    this.coverImageUri = resizedCoverImageUri;
  }

  hover(isHover: boolean){
    if(isHover){
      this.hoverClass = 'hovered';
    }else{
      this.hoverClass = '';
    }
  }

}
