import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Agente } from 'src/app/core/models/agente';
import { Jugador } from 'src/app/core/models/jugador';
import { Partida } from 'src/app/core/models/partida';
import { AgenteService } from 'src/app/core/services/agente.service';
import { FuncionesService } from 'src/app/core/services/funciones.service';
import { PartidaService } from 'src/app/core/services/partida.service';

@Component({
  selector: 'app-slide-last-game-jugador',
  templateUrl: './slide-last-game-jugador.component.html',
  styleUrls: ['./slide-last-game-jugador.component.css']
})
export class SlideLastGameJugadorComponent implements OnInit {

  /* @Output() */
  coloresAgente!: string[]
  @Input() jugador!: Jugador;
  @Input() id!: number;
  acumulador: number = -1;
  agente!: Agente 
  dataPartidas: Record<string,Partida[]> = {}
  

constructor(private partidaService: PartidaService,  private agenteService: AgenteService, protected funcionesService: FuncionesService){

}
  ngOnInit(): void {
   this.obtenerData()
   console.log(this.id)
  }


  obtenerData():void{
    this.agenteService.obtenerAgentes().subscribe(
      (agentes)=>{
        agentes = agentes as Agente[];
        this.agente = agentes.find(agente => agente.nombre == this.jugador.nombreAgente)!
        this.coloresAgente = this.agente.coloresGradiente
        this.partidaService.obtenerUltimasPartidas(this.jugador.usuario,this.jugador.tag,5).subscribe(            
          (partidas)=> {    
            partidas = partidas as Partida[]                     
            this.dataPartidas[this.jugador.usuario] = partidas                   
          } 
        )          
      }
    )
  }

  public obtenerColores():string[]{
    return this.coloresAgente
  }

}
