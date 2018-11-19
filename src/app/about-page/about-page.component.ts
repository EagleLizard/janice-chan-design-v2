import { Component, OnInit } from '@angular/core';

const ABOUT_INFO = {
  name: 'JANICE CHAN',
  bio: 'Janice Chan is a set designer and freelance artist based in Utah, U.S.A. She is pursuing a B.F.A. in Theatre Design and Production at Utah Valley University.',
  history: {
    title: 'SCENIC & PROPERTIES DESIGN',
    sections: [
      {
        title: 'Current & Upcoming',
        projects: [
          {
            title: 'The Laramie Project',
            org: '(Utah Valley University)'
          },
          {
            title: 'The Taming of the Shrew',
            org: '(Utah Valley University)'
          },
          {
            title: 'Mr Burns, a Post-Electric Play',
            org: '(An Other Theater Company)'
          }
        ]
      },
      {
        title: '2018',
        projects: [
          {
            title: 'Fat Pig', 
            org: '(An Other Theater Company)'
          },
          {
            title: 'Tribes', 
            org: '(Utah Valley University)'
          },
          {
            title: 'Agamemnon', 
            org: '(Utah Valley University)'
          },
          {
            title: 'Next Fall', 
            org: '(An Other Theater Company)'
          },
          {
            title: 'The Drag', 
            org: '(An Other Theater Company)'
          },
          {
            title: 'A History of Breathing', 
            org: '(Utah Valley University)'
          },
        ]
      },
      {
        title: '2017',
        projects: [
          {
            title: 'Hamlet',
            org: '(Brigham Young University)'
          },
          {
            title: 'The Taming of the Shrew',
            org: '(Renaissance Now)'
          },
          {
            title: 'Short Attention Span Theatre',
            org: '(Utah Valley University)'
          },
        ]
      },
      {
        title: 'ASSISTANT SCENIC DESIGN',
        projects: [
          {
            title: 'Cabaret', 
            org: '(Utah Valley University) 2018 BroadwayWorld Salt Lake City Awards Nomination',
          },
          {
            title: 'A Year with Frog & Toad', 
            org: '(Utah Valley University)',
          }
        ]
      }
    ]
  }
};

@Component({
  selector: 'jc-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  info = ABOUT_INFO;
  constructor() { }

  ngOnInit() {
  }

}
