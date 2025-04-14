import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-bms',
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './about-bms.component.html',
  styleUrl: './about-bms.component.css'
})
export class AboutBmsComponent {
  
}
