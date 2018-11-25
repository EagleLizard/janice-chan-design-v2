import { Injectable, EventEmitter } from '@angular/core';

export const LINKS: { title: string; route: string; }[] = [
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

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private event: EventEmitter<boolean> = new EventEmitter();
  private current: boolean = false;

  constructor() {

  }

  open(){
    this.event.emit(this.current = true);
  }

  close(){
    this.event.emit(this.current = false);
  }

  toggle(){
    if(this.current){
      this.close();
    }else{
      this.open();
    }
  }

  subscribe(generatorOrNext?: any, error?: any, complete?: any){
    return this.event.subscribe(generatorOrNext, error, complete);
  }

}
