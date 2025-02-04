import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-photos',
  imports: [CommonModule],
  templateUrl: './gallery-photos.component.html',
  styleUrl: './gallery-photos.component.css'
})
export class GalleryPhotosComponent {
  images: string[] = [
    'images/1.svg',
    'images/3.svg',
    'images/4.svg',
    'images/5.svg',
    'images/6.svg',
    'images/7.svg',
    'images/8.svg',
    'images/9.svg',
    'images/10.svg',
    'images/11.svg',
    'images/13.svg',
    'images/14.svg',
    'images/15.svg',
    'images/16.svg',
    'images/17.svg',
    'images/18.svg',
    'images/19.svg',
    'images/20.svg',
    'images/21.svg'
  ];
  
}
