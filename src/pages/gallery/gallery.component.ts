import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { GalleryPhotosComponent } from "../../components/gallery-photos/gallery-photos.component";
@Component({
  selector: 'app-gallery',
  imports: [NavbarComponent, FooterComponent, GalleryPhotosComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
