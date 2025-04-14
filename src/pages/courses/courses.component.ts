import { Component } from '@angular/core';
import { CourseSectionComponent } from "../../components/course-section/course-section.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-courses',
  imports: [CourseSectionComponent, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
