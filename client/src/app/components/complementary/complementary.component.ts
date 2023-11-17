import { Component } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-complementary',
  templateUrl: './complementary.component.html',
  styleUrls: ['./complementary.component.scss']
})
export class ComplementaryComponent {
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
       image: 'assets/images/globo1.jpg',
  },
  {
       link: 'https://www.youtube.com',
       image: 'assets/images/globo2.jpg',
  },
  {
       link: 'https://www.facebook.com',
       image: 'assets/images/globo3.jpg',
  },
  {
    link: 'https://www.facebook.com',
    image: 'assets/images/globo4.jpg',
}
  ];
title = 'Swiper';
}
