import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}

// export class NavbarComponent implements OnInit {

//   constructor() {
//     window.addEventListener('scroll', function(){
//       var mattoolbar:any = document.querySelector("mat-toolbar");
//       mattoolbar.classList.toggle("sticky", window.scrollY > 0);
//     }
//     )
//    }

//   ngOnInit(): void {
//   }




  
  // goToIndex() {
  //   this.router.navigate(['/', 'index']);
  // }
  // goToAboutUs() {
  //   this.router.navigate(['/', 'aboutUs']);
  // }
  // goToProducts() {
  //   this.router.navigate(['/', 'products']);
  // }


   
