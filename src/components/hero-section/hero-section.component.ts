import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-hero-section',
  imports: [BannerComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
