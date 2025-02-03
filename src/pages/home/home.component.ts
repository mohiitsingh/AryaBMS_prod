import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutComponent } from "../../components/about/about.component";
import { CourseSectionComponent } from "../../components/course-section/course-section.component";
import { ReviewComponent } from "../../components/reviews/reviews.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReachOutUsComponent } from "../../components/reach-out-us/reach-out-us.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, NavbarComponent, AboutComponent, CourseSectionComponent, ReviewComponent, ContactUsComponent, FooterComponent, ReachOutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
