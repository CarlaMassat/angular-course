import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'bases';
  //typescript
  public title: string = 'Hola Mundo';
  public counter: number = 10;

 increaseBy(value:number):void {
 this.counter += value;
 }
reset(){
  this.counter = 10;
}
}
