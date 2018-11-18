import { Injectable } from '@angular/core';

import GALLERY from './gallery-enum';
import Gallery from './gallery';
import { ImageService } from './image.service';

const GALLERY_PAGES: Gallery[] = [
  new Gallery(
    GALLERY.THE_DRAG,
    'The Drag',
    'the-drag',
    'AN OTHER THEATER COMPANY',
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
    'Cabaret',
    'cabaret',
    'UTAH VALLEY UNIVERSITY',
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
    'Next Fall',
    'next-fall',
    'AN OTHER THEATER COMPANY',
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
    'Agamemnon',
    'agamemnon',
    'UTAH VALLEY UNIVERSITY',
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
    'Tribes',
    'tribes',
    'UTAH VALLEY UNIVERSITY',
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
    'Fat Pig',
    'fat-pig',
    'AN OTHER THEATER COMPANY',
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
    'A Year with Frog & Toad',
    'a-year-with-frog-and-toad',
    'UTAH VALLEY UNIVERSITY',
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
    'Joseph and the Amazing Technicolor Dreamcoat',
    'joseph-and-the-amazing-technicolor-dreamcoat',
    'SUNDANCE SUMMER THEATRE',
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
    'The Taming of the Shrew',
    'the-taming-of-the-shrew',
    'RENAISSANCE NOW',
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
    'Hamlet',
    'hamlet',
    'BRIGHAM YOUNG UNIVERSITY',
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
    'Utah Renaissance Faire',
    'utah-renaissance-faire',
    'UTAH RENAISSANCE FAIRE',
    'prop painter',
    [
      
    ],
    '2017, 2018',
    'Lehi, Utah, U.S.A.'
  ),
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
