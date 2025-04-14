import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { PrivacyComponent, TermsAndConditionComponent } from '../components/footer/footer.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutBmsComponent } from '../pages/about-bms/about-bms.component';
import { CoursesComponent } from '../pages/courses/courses.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: "gallery", component:GalleryComponent},
    {path: 'about', component: AboutBmsComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'privacy-policy',component: PrivacyComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionComponent}

];
