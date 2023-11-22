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
  jugadores!: Jugador[] 
  inicial!: number;
  mySwiper!: Swiper; 

  
  
  constructor(private jugadorService: JugadorService) {
  }
  
  
  ngOnInit() {
    this.jugadorService.obtenerJugadores().subscribe((response:any)=>{
      this.jugadores = response as Jugador[];
      if (this.jugadores.length >= 2){
        this.inicial = 1
      }
      else{
        this.inicial = 0;
      }
    })


    this.mySwiper = new Swiper('.swiper-container',
     {
     /*  spaceBetween: 1, */      
      centeredSlides: true,
      centeredSlidesBounds: true,      
      pagination: {
        el: '.swiper-pagination', 
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });
  }

}
