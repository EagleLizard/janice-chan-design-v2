import { Injectable } from '@angular/core';

import GALLERY from './gallery-enum';
import Gallery from './gallery';
import { ImageService } from './image.service';
import imageUris from 'src/app/shared/image-uris';

const GALLERY_PAGES: Gallery[] = [
  new Gallery(
    GALLERY.JAMES_AND_THE_GIANT_PEACH,
    imageUris.JAMES_AND_THE_GIANT_PEACH_GALLERY,
    'James and the Giant Peach',
    'james-and-the-giant-peach',
    'Utah Valley University',
    'scenic & properties design',
    [
      'Directed by Dr. Lisa Hall',
      'Choreography by Chantelle Wells',
      'Technical Direction by Cristian Bell & Glenn Pepe',
      'Lighting Design by Colin Skip Wilson',
      'Costume Design by Dayna Kay Gomar',
      'Hair & Makeup Design by Kate Backman',
      'Production Photography by Suzy Oliveira',
    ],
    'November 2021',
    [
      {
        description: '“The set and costume design created a mesmerizing and immersive atmosphere. It had a cutout of the titular peach artfully inlaid with flowers which acted as the center of the production, but there were further elements with clouds above and the city skyline in the background which gave it a sense of depth and variety.”',
        link: {
          label: '"James and the Giant Peach” - A Fun, Whimsical Story About Finding One’s Home',
          uri: 'https://www.uvureview.com/valley-life/artsculture/james-and-the-giant-peach-a-fun-whimsical-story-about-finding-ones-home/',
        },
        publication: '(UVU Review)',
      },
    ],
    [
      'Book by Timothy Allen McDonald',
      'Music & Lyrics by Benj Pasek & Justin Paul',
    ],
  ),
  new Gallery(
    GALLERY.CINDERELLA,
    imageUris.CINDERELLA_GALLERY,
    'Cinderella Eats Rice and Beans',
    'cinderella',
    'Utah Valley University',
    'scenic and props designer',
    [
      'Director: Megan Ann Rasmussen',
      'Costumes: Michelle Walling',
      'Hair & Makeup: Kiyomi Coronado',
      'Photos: Suzy Oliveira',
    ],
    '2021',
  ),
  new Gallery(
    GALLERY.SWEENEY,
    imageUris.SWEENEY_GALLERY,
    'Sweeney Todd: The Demon Barber of Fleet Street',
    'sweeney-todd',
    'The Noorda Center for the Performing Arts & Utah Repertory Theater Company',
    'associate set design',
    [
      'Directed by Tim Threlfall',
      'Technical Direction & Build by Nat Reed',
      'Set Design by Josh Steadman',
      'Properties Design by Rachel Summerhalder',
      'Lighting Design by Jaron Kent Hermansen',
      'Costume Design by Nancy Cannon',
      'Hair & Makeup Design by Samantha Lambson',
      'Production Photography by Jay Drowns',
      'BTS Photography by Janice Chan',
    ],
    'October 2019',
    [
      {
        link: {
          label: 'Sweeney Todd: The Demon Barber of Fleet Street at Utah Valley University is Bloody Superb',
          uri: 'https://frontrowreviewersutah.com/?p=13952',
        },
        publication: '(Front Row Reviewers)'
      },
      {
        link: {
          label: 'Utah Repertory Theater’s SWEENEY TODD Is A Reminder Of What Happens When A Person’s Heart Is Guided Completely By Revenge',
          uri: 'https://www.broadwayworld.com/salt-lake-city/article/BWW-Review-Utah-Repertory-Theaters-SWEENEY-TODD-Is-A-Reminder-Of-What-Happens-When-A-Persons-Heart-Is-Guided-Completely-By-Revenge-20191029',
        },
        publication: '(BroadwayWorld Review)'
      },
      {
        link: {
          label: 'SWEENEY TODD, a Utah Rep and Noorda Center Co-Production, Wildly Heralded',
          uri: 'https://www.broadwayworld.com/salt-lake-city/article/BWW-Feature-SWEENEY-TODD-a-Utah-Rep-and-Noorda-Center-Co-Production-Wildly-Heralded-20191115',
        },
        publication: '(BroadwayWorld Feature)'
      },
      {
        link: {
          label: 'Utah Repertory Theater’s Sweeney Todd is a Bloody Good Time',
          uri: 'https://www.uvureview.com/valley-life/artsculture/utah-repertory-theaters-sweeney-todd-is-a-bloody-good-time/',
        },
        publication: '(UVU Review)'
      },
    ],
    [
      'Book by Hugh Wheeler',
      'Music & Lyrics by Stephen Sondheim',
    ],
  ),
  new Gallery(
    GALLERY.URINETOWN,
    imageUris.URINETOWN_GALLERY,
    'Urinetown: The Musical',
    'urinetown-the-musical',
    'Utah Valley University',
    'scenic & props designer',
    [
      'Directed by Matthew Herrick',
      'Technical Direction by Glenn Pepe',
      'Assistant Scenic & Properties Design by Gavin Henry',
      'Lighting Design by Colin Skip Wilson',
      'Costume Design by Mallory Goodman',
      'Hair & Makeup Design Kate Backman',
      'Production Photography by Jeremy Hall',
    ],
    'September 2019',
    [
      {
        description: '“The set, by Janice Chan, is hewn in rough scaffolding in browns and oranges and is cleverly constructed to break apart and accommodate the different scenes from the corporate suite to the sewer.”',
        link: {
          label: 'Urinetown at UVU is Streaming with Great Talent and Dark Humor',
          uri: 'https://frontrowreviewersutah.com/?p=13681',
        },
        publication: '(Front Row Reviewers)'
      }
    ],
    [
      'Book by Greg Kotis',
      'Music & Lyrics by Mark Hollmann & Greg Kotis',
    ]
  ),
  new Gallery(
    GALLERY.TAMINGOFTHESHREW,
    imageUris.TAMINGOFTHESHREW_GALLERY,
    'Taming Of The Shrew',
    'taming-of-the-shrew',
    'Utah Valley University',
    'scenic & props designer',
    [
      'Director: Shelby Gist',
      'Lights: Emma Belnap',
      'Sound: Hayley Christensen',
      'Costumes: Danae Devey',
      'Makeup & Hair: Alanna Cottam',
      'Photos: Shelby Gist, Janice Chan',
    ],
    '2019',
  ),
  new Gallery(
    GALLERY.MRBURNS,
    imageUris.MRBURNS_GALLERY,
    'Mr. Burns, a Post-Electric Play',
    'mr-burns',
    'An Other Theater Company',
    'scenic designer, props designer, muralist',
    [
      'Directors: Kacey Spadafora, Taylor Jack Nelson',
      'Lights: Emma Belnap',
      'Sound: Kaecy Spadafora',
      'Costumes: Janae Lefleur',
      'Photos: Laura Chapman, Janice Chan',

    ],
    '2019',
  ),
  new Gallery(
    GALLERY.LARAMIE,
    imageUris.LARAMIE_GALLERY,
    'The Laramie Project',
    'the-laramie-project',
    'Utah Valley University',
    'scenic & props designer',
    [
      'Director: Laurie Harrop-Purser',
      'Lights: Colin Skip Wilson',
      'Projections: Emma Belnap',
      'Sound: Nathan Lowry',
      'Costumes: Rae Sip & Kate Backman',
      'Makeup: Alanna Cottam',
      'Photos: Suzy Oliveira',
    ],
    '2019',
  ),
  new Gallery(
    GALLERY.THE_DRAG,
    imageUris.THE_DRAG_GALLERY,
    'The Drag',
    'the-drag',
    'An Other Theater Company',
    'scenic & props designer, muralist',
    [
      'Director: Taylor Jack Nelson',
      'Assistant Muralist: Tyler Whited',
      'Lights: Aimee Findley Moore',
      'Sound: Kacey Spadafora',
      'Costumes: Ash Knowles',
      'Makeup: Christopher-Alan Pederson',
      'Photos: Laura Chapman',
    ],
    '2018',
  ),
  new Gallery(
    GALLERY.CABARET,
    imageUris.CABARET_GALLERY,
    'Cabaret',
    'cabaret',
    'Utah Valley University',
    'assistant scenic & props designer',
    [
      'Director: Robert Moffat',
      'Scenic: Madeline Ashton',
      'Props: Madeline Ashton',
      'Lights: Emma Belnap',
      'Sound: Gavin Henry',
      'Costumes: Carolyn Urban',
      'Makeup: Shelby Gist',
      'Photos: Jeremy Hall',
    ],
    '2018',
  ),
  new Gallery(
    GALLERY.NEXT_FALL,
    imageUris.NEXT_FALL_GALLERY,
    'Next Fall',
    'next-fall',
    'An Other Theater Company',
    'scenic designer, props designer',
    [
      'Director: Kacey Spadafora',
      'Lights: Paige Porter',
      'Sound: Kaecy Spadafora',
      'Costumes: Ash Knowles',
      'Photos: Laura Chapman',
    ],
    '2018',
  ),
  new Gallery(
    GALLERY.AGAMEMNON,
    imageUris.AGAMEMNON_GALLERY,
    'Agamemnon',
    'agamemnon',
    'Utah Valley University',
    'scenic designer',
    [
      'Director: Christopher Clark',
      'Props: Aimee Moore',
      'Lights: Aaron Gubler',
      'Sound: Colin Skip Wilson',
      'Costumes: Mallory Goodman',
      'Photos: Deric Lambdin',
    ],
    '2018',
  ),
  new Gallery(
    GALLERY.TRIBES,
    imageUris.TRIBES_GALLERY,
    'Tribes',
    'tribes',
    'Utah Valley University',
    'scenic designer',
    [
      'Director: Hayley Lambdin',
      'Lights: Aaron Gubler',
      'Sound: Gavin Henry',
      'Costumes: Molly Pack',
      'Photos: Deric Lambdin',
    ],
    '2018',
  ),
  new Gallery(
    GALLERY.FAT_PIG,
    imageUris.FAT_PIG_GALLERY,
    'Fat Pig',
    'fat-pig',
    'An Other Theater Company',
    'scenic designer',
    [
      'Director: Morag Shepherd',
      'Lights: Paige Porter',
      'Sound: Paige Porter',
      'Costumes: Chris Lancaster',
      'Photos: Laura Chapman',
    ],
    '2018',
  ),
  new Gallery(
    GALLERY.UVU,
    imageUris.UVU_GALLERY,
    'A Year with Frog & Toad',
    'a-year-with-frog-and-toad',
    'Utah Valley University',
    'assistant scenic designer',
    [
      'Director: Lisa Hall Hagen',
      'Scenic: Emma Belnap',
      'Props: Alicia Freeman',
      'Lights: Aaron Gubler',
      'Sound: Kevin Criman',
      'Costumes: Chris Lancaster',
      'Photos: Great Projects Photography',
    ],
    '2017',
  ),
  new Gallery(
    GALLERY.SUNDANCE,
    imageUris.SUNDANCE_GALLERY,
    'Joseph and the Amazing Technicolor Dreamcoat',
    'joseph-and-the-amazing-technicolor-dreamcoat',
    'Sundance Summer Theatre',
    'scenic painter',
    [
      'Director: D. Terry Petrie',
      'Scenic: Stephen Purdy',
      'Lights: Matthew Taylor',
      'Sound: Matthew Kupferer',
      'Costumes: Nancy Cannon, Carla Summers'
    ],
    '2017',
  ),
  new Gallery(
    GALLERY.RENAISSANCE_NOW,
    imageUris.RENAISSANCE_NOW_GALLERY,
    'The Taming of the Shrew',
    'the-taming-of-the-shrew',
    'Renaissance Now',
    'scenic designer, properties master',
    [
      'Director: Archelaus D. Crisanto',
      'Assistant Director: Sarah Butler',
      'Costumes: Amanda Louise Hellewell',
      'Photos: Bruce Miller, Janice Chan',
    ],
    '2017',
  ),
  new Gallery(
    GALLERY.BYU,
    imageUris.BYU_GALLERY,
    'Hamlet',
    'hamlet',
    'Brigham Young University',
    'scenic designer',
    [
      'Director: Chris Hults',
      'Lights: Kalea Crapo',
      'Sound: Matthew Kupferer',
      'Costumes: Sarah Ziegler',
      'Photos: Matthew Kupferer',
    ],
    '2017',
  ),
  new Gallery(
    GALLERY.RENAISSANCE_FAIRE,
    imageUris.RENAISSANCE_FAIRE_GALLERY,
    'Utah Renaissance Faire',
    'utah-renaissance-faire',
    'Utah Renaissance Faire',
    'prop painter',
    [
      
    ],
    '2017, 2018',
  ),
  new Gallery(
    GALLERY.ART,
    imageUris.ART_GALLERY,
    '',
    'art',
    '',
    '',
    [],
    '',
  )
];

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(
    private imageService: ImageService
  ) {
    GALLERY_PAGES.forEach(gallery => {
      gallery.setImage(this.imageService.getScenicImage(gallery.galleryKey, 350));
    });
  }
  
  getGallery(galleryKey: GALLERY): Gallery{
    let foundGallery = GALLERY_PAGES.find(gallery => {
      return gallery.galleryKey === galleryKey;
    });
    if(foundGallery === undefined){
      throw new Error(`No page found for key ${galleryKey}`);
    }
    return foundGallery;
  }

  getGalleryByRoute(route: string){
    let foundGallery = GALLERY_PAGES.find(gallery => {
      return gallery.route === route;
    });
    if(foundGallery === undefined){
      throw new Error(`No page found for route ${route}`);
    }
    return foundGallery;
  }

}
