import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';


// Importo los componentes relacionados al modulo
@NgModule({
  declarations: [
    HeroeComponent,
    ListComponent
  ],
//Exporto los componentes para que puedan ser utilizados externamente
  exports: [
    HeroeComponent,
    ListComponent
  ],

  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
