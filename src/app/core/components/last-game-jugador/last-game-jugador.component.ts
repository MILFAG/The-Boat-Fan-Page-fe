import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import {Swiper} from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { PartidaService } from '../../services/partida.service';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';
import { Partida } from '../../models/partida';
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

  @Input() id!: number;
  jugadores!: Jugador[]; 
  mySwiper!: Swiper;
  acumulador: number = -1;
  agentes!: Agente[] 
  dataPartidas: Record<string,Partida[]> = {}

  @ViewChild('agenteImg') agenteImg!: ElementRef;
  @ViewChild('circle') circle!: ElementRef;

  constructor(private partidaService: PartidaService, private jugadorService:JugadorService, private agenteService: AgenteService, protected funcionesService: FuncionesService){
  }

  ngOnInit(): void {
    this.obtenerData()       

  }

  obtenerData():void{
    this.agenteService.obtenerAgentes().subscribe(
      (agentes)=>{
        this.agentes = agentes as Agente[]
      }
    )
    this.jugadorService.obtenerJugadores().subscribe(
      (jugadores)=>{
        this.jugadores = jugadores as Jugador[]     
        jugadores.forEach((jugador) => {          
          this.partidaService.obtenerUltimasPartidas(jugador.usuario,jugador.tag,5).subscribe(            
            (partidas)=> {    
              partidas = partidas as Partida[]                     
              this.dataPartidas[jugador.usuario] = partidas                   
            } 
          )          
        });
      }
    )    
  }

obtenerImagenAgente(nombreAgente:string):string{  
  return this.agentes.find(agente => agente.nombre == nombreAgente)!.imagenCompleta
}
 
  scaleCircle(){
    this.circle.nativeElement.style.transform = 'scale(1.4)'; // Ajusta la escala según tus necesidades
    this.circle.nativeElement.style.transition = 'transform 0.5s'; // Ajusta la duración de la animación
  }
}
