import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  frase = "Las mejores cosas de la vida no caen del cielo ...muchas están en la cocina "
  mision = "En Pastelería M&M ponemos todo nuestro esfuerzo para brindar productos de calidad. Tenemos la más amplia variedad en productos de pastelería sin azúcar, como tortas, alfajores o tartaletas.Visite nuestra pastelería en Barranca y compruebe por qué marcamos la diferencia en nuestro rubro."
  vision= "Ser una empresa con un equipo de trabajo orientado a la mejora continua, con los conocimientos y habilidades necesarias para lograr la calidad de los productos elaborados así mismo ofrecer a los clientes los mejores precios y tener una buena rentabilidad."
  constructor() { }

  ngOnInit(): void {
  }

}
