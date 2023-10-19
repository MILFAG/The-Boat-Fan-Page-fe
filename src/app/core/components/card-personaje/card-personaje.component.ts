import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent {
  @Input() id!: number;
  
  
}

