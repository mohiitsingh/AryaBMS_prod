import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, FooterComponent, ContactUsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
