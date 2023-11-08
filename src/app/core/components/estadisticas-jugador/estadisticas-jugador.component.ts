import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-estadisticas-jugador',
  templateUrl: './estadisticas-jugador.component.html',
  styleUrls: ['./estadisticas-jugador.component.css']
})
export class EstadisticasJugadorComponent {
  @Input() id!: number;
  jugadorIds: number[] = [1, 2, 3, 4, 5, 6, 7]; // ID de cada jugador
  list: number [] = [1,2,3,4,5] //ultimos 5 partidos
  mySwiper!: Swiper;


  @ViewChild('agenteImg') agenteImg!: ElementRef;
  @ViewChild('circle') circle!: ElementRef;

  scaleCircle(){
    this.circle.nativeElement.style.transform = 'scale(1.4)'; // Ajusta la escala según tus necesidades
    this.circle.nativeElement.style.transition = 'transform 0.5s'; // Ajusta la duración de la animación
  }
}
