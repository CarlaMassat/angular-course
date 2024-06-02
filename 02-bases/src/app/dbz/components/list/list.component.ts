import { Component,Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

// @Input() permite recibir del padre que es main-page.component, en este caso lista de personajes

export class ListComponent {
@Input()
public characterList: Character [] = [{
  // Se inicializa con name y power
  name: 'Trunks',
  power: 10
}]
}
