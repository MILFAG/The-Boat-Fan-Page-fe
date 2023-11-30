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
  swiper!: Swiper; 
  centrar!:boolean;
  
  
  constructor(private jugadorService: JugadorService) {
  }
  
  
  ngOnInit() {
    this.jugadorService.obtenerJugadores().subscribe((response:any)=>{
      this.jugadores = response as Jugador[];
      if (this.jugadores.length >= 2){
        this.inicial = 1;
        this.centrar=false;
      }
      else{
        this.inicial = 0;
        this.centrar=true;
      }
      this.swiper = new Swiper('.swiper', {
        // Optional parameters
        initialSlide:this.inicial,
        centeredSlides:false,
        direction: 'horizontal',
        spaceBetween: 35,
        loop: false,    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },   
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        keyboard: {
          enabled: true,
        },
  
        //Configurar breakpoints mas adelante
       breakpoints: {
          640: {
            slidesPerView: Math.min(1,this.jugadores.length),
          },
          780: {
            slidesPerView: Math.min(2,this.jugadores.length),   
          },
          1024: {
            slidesPerView: Math.min(3,this.jugadores.length)
          },
        },   
      }); 
    })

     
  }
   

}



