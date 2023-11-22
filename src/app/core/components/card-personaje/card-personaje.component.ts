import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { HttpClient } from '@angular/common/http';
import { EstadisticasService } from '../../services/estadisticas.service';
import { Estadisticas } from '../../models/estadisticas';
import { Rango } from '../../models/rango';
import { RangoService } from '../../services/rango.service';
import { FuncionesService } from '../../services/funciones.service';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit{
  @Input()
  jugador!: Jugador;  
  agente!: Agente;
  estadisticas!: Estadisticas
  rango!: Rango 
  cargando: boolean = true
  estiloFrontal: string =  '';
  estiloTrasero: string = '';  
  constructor(
    private rangoService: RangoService, 
    private estadisticasService: EstadisticasService, 
    private agenteService: AgenteService, 
    private http: HttpClient,
    protected funcionesService: FuncionesService
    ) {}


  ngOnInit(): void {           
    this.obtenerData()    
  }

  obtenerData(): void {
    this.agenteService.obtenerAgentePorNombre(this.jugador.nombreAgente).subscribe(
      (agente) => {
        this.agente = agente as Agente;        
        this.crearEstiloFrontal()      
      });
    this.estadisticasService.obtenerEstadisticasJugador(this.jugador.usuario,this.jugador.tag).subscribe(
      (estadisticas) => {
        this.estadisticas = estadisticas as Estadisticas             
        this.rangoService.obtenerRango(estadisticas.rango).subscribe(
          (rango) =>
          {this.rango = rango as Rango;                     
          this.crearEstiloTrasero()       
          this.cargando = false;   
          }
        )
      }
    );
  }
  
  crearEstiloFrontal():void{ 
  const color0 = '#'+this.agente.coloresGradiente[0]
  const color1 = '#'+this.agente.coloresGradiente[1]
  const color2 = '#'+this.agente.coloresGradiente[2]    
  this.estiloFrontal = ' border: 2px solid'+this.funcionesService.aclararColor(color2,30)+';'
  this.estiloFrontal += 'background: linear-gradient(#222222,#444444,'+this.funcionesService.aclararColor(color2,15)+');'; 
  }

  crearEstiloTrasero():void{        
    const colorRango = ""+ this.rango.color
    this.estiloTrasero = 'border: 2px solid'+this.funcionesService.oscurecerColor(colorRango,30)+';'
    this.estiloTrasero += 'background: linear-gradient(#222222,#444444,'+this.funcionesService.oscurecerColor(colorRango,30)+');';   
  }
   

}

