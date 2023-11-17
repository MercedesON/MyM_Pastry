import { Component } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent {
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
 };
slides = [
  {
       link: 'https://www.google.com',
       image: 'assets/images/1.jpg',
  },
  {
       link: 'https://www.youtube.com',
       image: 'assets/images/2.jpg',
  },
  {
       link: 'https://www.facebook.com',
       image: 'assets/images/3.jpg',
  },
  {
    link: 'https://www.facebook.com',
    image: 'assets/images/4.jpg',
}
  ];
title = 'Swiper';
}
