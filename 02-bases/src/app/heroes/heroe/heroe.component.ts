import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizedName(): string {
 return 'Hola'
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`
  }

  //Metodo para cambiar nombre, this refiera a la propiedad
  changeHero(): void {
    this.name = 'Spiderman'
  }

  //Metodo para cambiar edad
  changeAge(): void {
this.age = 25
  }
}
