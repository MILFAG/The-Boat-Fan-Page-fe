import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Jugador } from '../../models/jugador';
import { JugadorService } from '../../services/jugador.service';
// register Swiper custom elements
register();

@Component({
  selector: 'app-container-salero',
  templateUrl: './container-salero.component.html',
  styleUrls: ['./container-salero.component.css']
})
export class ContainerSaleroComponent implements OnInit {
  //id!:number;
  jugadores!: Jugador[] 
  
  
  constructor(private jugadorService: JugadorService) {
    //this.id = 1;
  }
  // Define una lista de IDs de jugador para el carrusel   
  mySwiper!: Swiper;
  ngOnInit() {
    this.jugadorService.obtenerJugadores().subscribe((response:any)=>{
      this.jugadores = response as Jugador[]})


    this.mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }


}
