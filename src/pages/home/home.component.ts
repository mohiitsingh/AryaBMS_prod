import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutComponent } from "../../components/about/about.component";
import { CourseSectionComponent } from "../../components/course-section/course-section.component";
import { ReviewComponent } from "../../components/reviews/reviews.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, NavbarComponent, AboutComponent, CourseSectionComponent, ReviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
