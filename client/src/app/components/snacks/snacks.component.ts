import { Component } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent {
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
       image: 'assets/images/empanadas.jpg',
  },
  {
       link: 'https://www.youtube.com',
       image: 'assets/images/minipizza.jpg',
  },
  {
       link: 'https://www.facebook.com',
       image: 'assets/images/pitipanes.jpg',
  },
  {
    link: 'https://www.facebook.com',
    image: 'assets/images/triple.jpg',
}
  ];
title = 'Swiper';
}
