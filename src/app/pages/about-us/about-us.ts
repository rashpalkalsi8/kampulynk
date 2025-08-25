import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, CarouselModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {

  customOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,       // Slide changes every 3 seconds
    autoplayHoverPause: true,
    smartSpeed: 800,             // Controls transition speed (ms); higher = smoother
    // animateOut: "fadeOut",       // Use fade effect instead of slide (optional)
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 1 }
    }
  };

  // New carousel config for "Our Communities"
customOptionsCommunities = {
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000, 
  autoplayHoverPause: true,
  smartSpeed: 800,
  responsive: {
    0: { items: 1 },
    768: { items: 1 },
    992: { items: 1 }  // since we are manually grouping 4 per slide with col-lg-3
  }
};
  

}
