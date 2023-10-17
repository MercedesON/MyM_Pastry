import { Component } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
//import { LoginService } from 'src/app/services/auth/login.service';
//import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { AuthService } from 'src/app/services/auth/service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private authService: AuthService) {

  }

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

  logInWithGoogle() {
    this.authService.logInWithGoogleProvider();
  }
}
