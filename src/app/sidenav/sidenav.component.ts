import { Component, OnInit, ViewChild } from '@angular/core';
import { NavService, LINKS } from '../shared/nav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'jc-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened: boolean;
  links = LINKS;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private navService: NavService,
  ) { }

  ngOnInit() {
    this.opened = false;
    this.navService.subscribe(evt=>{
      this.opened = evt;
    });
  }

  onOpenedChange(event: any){
    if(event){
      this.navService.open();
    }else{
      this.navService.close();
    }
  }

  onItemClick(){
    this.navService.close();
  }

}
