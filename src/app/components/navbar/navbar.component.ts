import { Component, OnInit } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  //standalone: true,
  //imports:[RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  badgevisible = false;
  is0n = true;
  isContacto = false;
  isNosotras=false;

  badgevisibility() {
    this.badgevisible = true;
  }
  constructor(private router: Router) {   
  }
  
  goToContact() {
    console.log("goToContact");    
    this.router.navigate(['/', 'contacto']);
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


   
