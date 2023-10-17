import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  is0n = true;
  is1n = true;
   isContacto = false;
   isInicioSesion=false;
   isAbout=false;

  // badgevisibility() {
  //   this.badgevisible = true;
  // }

  constructor(private router: Router) {   
  }
  
  goToContact() {
    console.log("goToContact");    
    this.router.navigate(['/', 'contacto']);
  }
}
