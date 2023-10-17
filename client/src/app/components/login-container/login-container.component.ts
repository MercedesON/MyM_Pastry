import { Component } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {
  handleClose() {
    // Acciones a realizar al hacer clic en el botón de cerrar
    console.log('Cerrar');
  }
  
}
