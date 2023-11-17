import { Component } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-tortas',
  templateUrl: './tortas.component.html',
  styleUrls: ['./tortas.component.scss']
})
export class TortasComponent {
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
   
  // title = 'ng-carousel-demo';
  
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  
  // slidesStore = [
  //     {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
  //     {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
  //     {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
  //     {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
  //     {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
  //     {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
  //     {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  //   ];
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