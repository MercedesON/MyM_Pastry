//import { FormBuilder, Validators } from '@angular/forms';
//import { LoginService } from 'src/app/services/auth/login.service';
//import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,private authService: AuthService) {  }
  
    logInWithGoogle() {
      this.authService.logInWithGoogleProvider();
    }
    ngOnInit(): void {
    }
  
    login() {
  
      // Validamos que el usuario ingrese datos
      if (this.username == '' || this.password == '') {
        this.toastr.error('Todos los campos son obligatorios', 'Error');
        return
      }
      console.log("username");
      console.log(this.username);
      console.log("password");
      console.log(this.password);
  
      // Creamos el body
      const user: User = {
        username: this.username,
        password: this.password
      }
  
      this.loading = true;
      this._userService.login(user).subscribe({
        next: (token) => {
          console.log("_userService.login-token");
          console.log(token);
          localStorage.setItem('token', token);
          //this.router.navigate(['/dashboard'])
          this.router.navigate(['dashboard'])
          
        },
        error: (e: HttpErrorResponse) => {
          console.log("_userService.login-error");
          this._errorService.msjError(e);
          this.loading = false
        }
      })
     
      
    }
  
  }
  