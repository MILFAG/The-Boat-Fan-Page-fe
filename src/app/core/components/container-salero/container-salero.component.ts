import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-container-salero',
  templateUrl: './container-salero.component.html',
  styleUrls: ['./container-salero.component.css']
})
export class ContainerSaleroComponent implements OnInit {
  id!:number;
  constructor() {
    this.id = 1;
  }
  // Define una lista de IDs de jugador para el carrusel
  jugadorIds: number[] = [1, 2, 3, 4, 5, 6, 7]; // ID de cada jugador
  mySwiper!: Swiper;
  ngOnInit() {
    this.mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }


}
