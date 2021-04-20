import { Injectable } from '@angular/core';

import GALLERY from './gallery-enum';
import Gallery from './gallery';
import { ImageService } from './image.service';
import imageUris from 'src/app/shared/image-uris';

const GALLERY_PAGES: Gallery[] = [
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
    'Location: Orem, Utah, U.S.A.',
  ),
  new Gallery(
    GALLERY.SWEENEY,
    imageUris.SWEENEY_GALLERY,
    'Sweeney Todd: The Demon Barber of Fleet Street',
    'sweeney-todd',
    'The Noorda Center for the Performing Arts & Utah Repertory Theater Company',
    'associate set designer',
    [
      'Director: Tim Threlfall',
      'Set: Josh Steadman',
      'Props: Rachel Summerhalder',
      'Lights: Jaron Kent Hermansen',
      'Sound: Matthew Kupferer',
      'Costumes: Nancy Cannon',
      'Hair & Makeup: Samantha Lambson',
      'Photos: Janice Chan',
    ],
    '2019',
    'Location: Orem, Utah, U.S.A.',
  ),
  new Gallery(
    GALLERY.URINETOWN,
    imageUris.URINETOWN_GALLERY,
    'Urinetown: The Musical',
    'urinetown-the-musical',
    'Utah Valley University',
    'scenic & props designer',
    [
      'scenic & props designer',
      'Director: Matthew Herrick',
      'Assistant: Gavin Henry',
      'Lights: Colin Skip Wilson',
      'Sound: Nathan Lowry',
      'Costumes: Mallory Goodman',
    ],
    '2019',
    'Location: Orem, Utah, U.S.A.',
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
    'Location: Orem, Utah, U.S.A.',
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
    'Location: Provo, Utah, U.S.A.',
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
    'Location: Orem, Utah, U.S.A.',
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
    'Location: Provo, Utah, U.S.A.'
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
    'Location: Orem, Utah, U.S.A.'
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
    'Location: Provo, Utah, U.S.A.'
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
    'Orem, Utah, U.S.A.'
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
    'Orem, Utah, U.S.A.'
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
    'Provo, Utah, U.S.A.'
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
    'Orem, Utah, U.S.A.'
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
    'Sundance, Utah, U.S.A.'
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
    'Provo, Utah, U.S.A.',
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
    'Provo, Utah, U.S.A.'
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
    'Lehi, Utah, U.S.A.'
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
