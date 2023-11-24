import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import {Swiper} from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';
// register Swiper custom elements
register();
@Component({
  selector: 'app-last-game-jugador',
  templateUrl: './last-game-jugador.component.html',
  styleUrls: ['./last-game-jugador.component.css']
})
export class LastGameJugadorComponent implements OnInit {

  jugadores!: Jugador[]; 
  swiper!: Swiper;

  @ViewChild('agenteImg') agenteImg!: ElementRef;
  @ViewChild('circle') circle!: ElementRef;

  constructor(private jugadorService:JugadorService){
    
  }

  ngOnInit(): void {
    this.obtenerData();     
   //Inicializar swiper
      
 }

  obtenerData():void{
    this.jugadorService.obtenerJugadores().subscribe(
      (jugadores)=>{
        this.jugadores = jugadores as Jugador[]     
        jugadores.forEach((jugador) => {          
          this.swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,    
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },    
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },         
            keyboard: {
              enabled: true,
            },
          });  
        });
      }
    )    
  }
 
 
}
