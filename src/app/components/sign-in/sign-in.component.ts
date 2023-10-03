import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar lógica para autenticar al usuario
    // Por ejemplo, puedes enviar los datos al servidor para verificar la autenticación.
    // Si la autenticación es exitosa, puedes redirigir al usuario a otra página.
  }
}
