import { 
  Component, 
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'jc-art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.scss']
})
export class ArtPageComponent implements OnInit, OnChanges {

  @Input() galleryImage;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes.galleryImage);
  }

}
