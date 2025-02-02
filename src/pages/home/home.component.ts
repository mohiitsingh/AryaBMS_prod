import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, NavbarComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
