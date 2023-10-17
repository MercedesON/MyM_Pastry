import { Component } from '@angular/core';

interface UserData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
}

interface Error {
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userData: UserData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
  };
  error: Error = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
  };
  showTextArea: boolean = false;
  showButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  handlerInput(event: any): void {
    this.userData = {
      ...this.userData,
      [event.target.name]: event.target.value
    };
    this.error = this.validate({
      ...this.userData,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e: any): void {
    e.preventDefault();
    try {
      if (Object.values(this.error).some(value => value !== '')) {
        // Mostrar una advertencia si hay errores
        console.log('Verifique los campos');
      } else {
        // Realizar la acción de envío exitoso
        console.log('Envío exitoso', this.userData);
        this.userData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          description: '',
        };
      }
    } catch (error) {
      // Manejar errores si ocurren
      console.error('Error', error);
    }
  }

  handleReclamosClick(event: any): void {
    this.showTextArea = true;
    this.showButton = false;
  }

  validate(data: UserData): Error {
    const error: Error = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      description: '',
    };

    // Aquí puedes realizar validaciones, por ejemplo:
    if (!data.name) {
      error.name = 'El nombre es obligatorio';
    }

    if (!data.email) {
      error.email = 'El correo electrónico es obligatorio';
    } else if (!this.isValidEmail(data.email)) {
      error.email = 'El correo electrónico no es válido';
    }

    // Agregar más validaciones según tus necesidades

    return error;
  }

  isValidEmail(email: string): boolean {
    // Implementar una validación de correo electrónico aquí
    // Devuelve true si el correo es válido, de lo contrario false
    return true; // Cambiar esta implementación
  }
  
  // constructor(private router:Router){}
  // ngOnInit() {
    
  // }
  // navegar(){
  //   this.router.navigate(['/pavmmv']);
  // }

}
