import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  username: string='';
  password: string='';
  confirmPassword:string='';
  mobile:string='';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }


  ngOnInit(): void {
    
  }
  addUser(){
    console.log("this.username");
    console.log(this.username);    
    console.log(this.password);    
    console.log(this.mobile);
   
    //We validate that the user enters values
    if (this.username == '' || this.password == '' || this.confirmPassword == ''||this.mobile == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
    //Validamos que las paswoords sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }
    //Creamos el objeto
    const user: User = {
      username: this.username,
      password: this.password,
      mobile: this.mobile
    }

    this.loading = true;
    this._userService.signUp(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
  // constructor(private authService: AuthService) {

  // }
  // signUp(email: string, password: string) {
  //   this.authService.signUpWithEmailAndPassword(email, password);
  // }
}
