import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  titulo = "Las mejores cosas de la vida no caen del cielo ...muchas están en la cocina "

  //autor = "Albert Einstein"
  vision = "En Pastelería M&M ponemos todo nuestro esfuerzo para brindar productos de calidad. Tenemos la más amplia variedad en productos de pastelería sin azúcar, como tortas, alfajores o tartaletas.Visite nuestra pastelería en Barranca y compruebe por qué marcamos la diferencia en nuestro rubro."

  constructor() { }

  ngOnInit(): void {
  }

}
