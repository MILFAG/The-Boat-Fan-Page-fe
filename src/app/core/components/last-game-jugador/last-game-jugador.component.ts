import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import {Swiper} from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { FuncionesService } from '../../services/funciones.service';
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
  colorFondo = "#ff0000";
  dataSlides : Record<number,String[]> = {}

  constructor(private jugadorService:JugadorService, private agenteService: AgenteService, private funcionesService:FuncionesService){
    
  }

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper')
    this.obtenerData();   
 }

  obtenerData():void{
   
    this.jugadorService.obtenerJugadores().subscribe(
      (jugadores)=>{
        this.jugadores = jugadores as Jugador[]
        for (let i = 0; i < jugadores.length; i++) {
          this.agenteService.obtenerAgentePorNombre(jugadores[i].nombreAgente).subscribe(
            (agente)=> {
              this.dataSlides[i] = agente!.coloresGradiente
              var miElemento = document.getElementById('circulo');
              miElemento!.style.backgroundColor = <string>this.funcionesService.aclararColor((<string>this.dataSlides[0][2]),10)
              this.swiper = new Swiper('.swiper', {      
                direction: 'horizontal',
                loop: false,        
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },    
                keyboard: {
                  enabled: true,
                },                      
              });    
              this.swiper.on('realIndexChange', () => {
                var miElemento = document.getElementById('circulo');
                miElemento!.style.backgroundColor = <string>this.funcionesService.aclararColor((<string>this.dataSlides[this.swiper.realIndex][2]),30)
              }); 
            }           
          )          
        }           
      })  
  }
 
}
