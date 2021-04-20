import { Component, OnInit } from '@angular/core';
import imageUris from '../shared/image-uris';

const ABOUT_INFO = {
  name: 'JANICE CHAN',
  bio: 'Janice Chan is a scenic designer based in Utah County, highly driven by storytelling and moved by conceptual art and surrealism. She holds a B.F.A. in Theatre Arts: Scenic Design from Utah Valley University. Her work primarily consists of design for the stage, with experience in painting sets and murals for Sundance Summer Theatre, Utah Renaissance Faire, and An Other Theater Company, and producing scenic draftings for theatrical and architectural designs. Janice is a professional organizer, marketing and social media connoisseur, and a graphic design enthusiast. Janice enjoys exploring local natural scenery, eternally drawing inspiration from mountainscapes and finding beauty in the mundane, and not labelling herself as a foodie*. She is committed to projects that serve marginalized communities, and supports safe and accessible entertainment practices during the pandemic and beyond. Janice is a first-generation immigrant from Hong Kong and Melbourne, Australia, and currently resides in the fastest growing city in Utah.',
  bioLine2: '*Janice is 110% a foodie.',
  instagram: {
    igPrefix: 'Follow Janice on Instagram',
    userName: '@ninetiestragedy',
    url: 'https://www.instagram.com/ninetiestragedy/',
  },
  contact: 'contact@janicechan.design',
  history: {
    title: 'SCENIC & PROPERTIES DESIGN',
    sections: [
      {
        title: 'Current & Upcoming',
        projects: [
          {
            title: 'Noises Off',
            org: '(Utah Valley University)',
          },
        ]
      },
      {
        title: '2019',
        projects: [
          {
            title: 'Sweeney Todd: The Demon Barber of Fleet Street',
            org: '(Noorda Center for Performing Arts & Utah Repertory Theater)'
          },
          {
            title: 'Unchanged Voices, a Devised Play Addressing Conversion Therapy',
            org: '(Utah Valley University)'
          },
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
          },
          {
            title: 'Urinetown the Musical',
            org: '(Utah Valley University)'
          },
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
  bioImage = imageUris.JANU;
  constructor() { }

  ngOnInit() {
  }

}
