import { Component, OnInit } from '@angular/core';
import imageUris from '../shared/image-uris';

const ABOUT_INFO = {
  name: 'JANICE CHAN',
  bio: 'Janice Chan is a scenic designer based in Utah County, highly driven by storytelling and moved by conceptual art and surrealism. She holds a B.F.A. in Theatre Arts: Scenic Design from Utah Valley University, where earned the 2020 Outstanding Student Award from the School of the Arts. Her work primarily consists of design for the stage, with experience in scenic painting for Sundance Summer Theatre, Utah Renaissance Faire, and An Other Theater Company, and producing set draftings for theatrical and architectural designs. Janice is a graphic design enthusiast, frequently incorporating graphic elements in her show designs. She has a background in administration in academia and social media marketing. Janice enjoys exploring local natural scenery, eternally drawing inspiration from mountainscapes and finding beauty in the mundane, and not labelling herself as a foodie*. She is committed to projects that serve marginalized communities, and supports safe and accessible entertainment practices during the pandemic and beyond. Janice is a first-generation immigrant from Hong Kong and Melbourne, Australia, and currently resides in the fastest growing city in Utah.',
  bioLine2: '*Janice is 110% a foodie.',
  instagram: {
    igPrefix: 'Follow Janice on Instagram',
    userName: '@ninetiestragedy',
    url: 'https://www.instagram.com/ninetiestragedy/',
  },
  contact: 'contact@janicechan.design',
  history: {
    title: 'SCENIC DESIGNS, ASSISTANT WORK, AND CREATIVE PROJECTS',
    sections: [
      {
        title: '2019',
        projects: [
          {
            title: 'La Bohème',
            org: '(The Noorda Center for the Performing Arts)',
          },
          {
            title: 'James and the Giant Peach',
            org: '(Utah Valley University)',
          },
          {
            title: 'The Heidi Chronicles',
            org: '(Utah Valley University)',
          },
          {
            title: 'The Tempest',
            org: '(Renaissance Now Theatre & Film)',
          },
          {
            title: 'The Diaries of Romeo and Juliet',
            org: '(Renaissance Now Theatre & Film)',
          },
          {
            title: 'Cinderella Eats Rice and Beans',
            org: '(Utah Valley University)',
          },
          {
            title: 'Festival of the Seas',
            org: '(Loveland Living Planet Aquarium)',
          },
          {
            title: 'Last Train to Nibroc',
            org: '(An Other Theater Company)',
          },
          {
            title: 'Timmon and the Magic Shoes',
            org: '(Utah Valley University)',
          },
          {
            title: 'Noises Off',
            org: '(Utah Valley University)',
          },
          {
            title: 'Unchanged Voices',
            org: '(Utah Valley University)',
          },
          {
            title: 'Urinetown: The Musical',
            org: '(Utah Valley University)',
          },
          {
            title: 'Sweeney Todd: The Demon Barber of Fleet Street',
            org: '(Noorda Center for the Performing Arts)',
          },
          {
            title: 'Taming of the Shrew',
            org: '(Utah Valley University)',
          },
          {
            title: 'Mr. Burns, A Post-Electric Play',
            org: '(An Other Theater Company)',
          },
          {
            title: 'Mamma Mia!',
            org: '(Sundance Summer Theatre)',
          },
          {
            title: 'The Laramie Project',
            org: '(Utah Valley University)',
          },
          {
            title: 'A History of Breathing',
            org: '(Utah Valley University)',
          },
          {
            title: 'Cabaret',
            org: '(Utah Valley University)',
          },
          {
            title: 'The Drag',
            org: '(An Other Theater Company)',
          },
          {
            title: 'Next Fall',
            org: '(An Other Theater Company)',
          },
          {
            title: 'Agamemnon',
            org: '(Utah Valley University)',
          },
          {
            title: 'Tribes',
            org: '(Utah Valley University)',
          },
          {
            title: 'Fat Pig',
            org: '(An Other Theater Company)',
          },
          {
            title: 'A Year with Frog and Toad',
            org: '(Utah Valley University)',
          },
          {
            title: 'Joseph and the Amazing Technicolor Dreamcoat ',
            org: '(Sundance Summer Theatre)',
          },
          {
            title: 'The Taming of the Shrew',
            org: '(Renaissance Now Theatre & Film)',
          },
          {
            title: 'Short Attention Span Theatre',
            org: '(Utah Valley University)',
          },
          {
            title: 'Hamlet',
            org: '(Brigham Young University)',
          },
        ]
      },
      // {
      //   title: '2018',
      //   projects: [
          
      //   ]
      // },
      // {
      //   title: '2017',
      //   projects: [
          
      //   ]
      // },
      // {
      //   title: 'ASSISTANT SCENIC DESIGN',
      //   projects: [
          
      //   ]
      // }
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
