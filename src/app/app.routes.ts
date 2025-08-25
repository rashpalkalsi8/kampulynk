import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
    { path: '', component: Homepage },         
  { path: 'about', component: AboutUs },
  { path: 'contact', component: ContactUs },
];
