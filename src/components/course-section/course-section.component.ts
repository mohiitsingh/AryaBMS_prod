import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-section',
  imports: [CourseComponent, CommonModule],
  templateUrl: './course-section.component.html',
  styleUrl: './course-section.component.css'
})
export class CourseSectionComponent {
  courses = [
    {
      heading: 'BMS Engineer :',
      description: `Basic training of control panel & switchgear, panel drawing, panel components 
(Relay/Contactor/VFD/Timer Relay etc.), BMS schematic drawing, BMS Layout drawing, DDC 
panel drawing, BMS field device installation, cabling and termination`,
    },
    {
      heading: 'BMS Technician',
      description: `Basic training of control panel & switchgear, panel drawing, panel components
(Relay/Contactor/VFD/Timer Relay etc.), BMS schematic drawing, BMS Lay
`
    },
    {
      heading: 'BMS Operator:',
      description: `Basic training of control panel & switchgear, panel drawing, panel components
(Relay/Contactor/VFD/Timer Relay etc.), BMS schematic drawing, DDC panel drawing,
BMS field device installation, cabling , tagging and termination
`
    },
    {
      heading: 'Control Panel Wiring Technician',
      description: `Basic training of control panel & switchgear, panel drawing, panel components
(Relay/Contactor/VFD/Timer Relay etc.), Panel wiring (DOL, STAR/DELTA, VFD,
DDC/PLC)
`
    }
  ];
}
