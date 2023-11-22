import { Component, Input, OnInit } from '@angular/core';
import { Partida } from '../../models/partida';
import { Agente } from '../../models/agente';
import { AgenteService } from '../../services/agente.service';
import { FuncionesService } from '../../services/funciones.service';

@Component({
  selector: 'app-last-game',
  templateUrl: './last-game.component.html',
  styleUrls: ['./last-game.component.css']
})




export class LastGameComponent implements OnInit{ 

  @Input()
  partida!: Partida
  agente!: Agente
  estilo: string = ''
  rondasPropio!  : number 
  rondasContrario! : number
  resultado! : string

  constructor(private agenteService: AgenteService, private funcionesService: FuncionesService){
  }

  ngOnInit(): void {
    this.obtenerData()
  }


obtenerData():void{  
  this.agenteService.obtenerAgentes().subscribe(
    (agentes:Agente[])=> {                
      this.agente = agentes.find(agente => agente.nombre == this.partida.stats.agente.nombre)!     
      this.generarEstilo()       
      this.asignarRondas()    
    })  
}

generarEstilo():void{ 
  this.estilo += 'border: 1px solid '+ this.funcionesService.oscurecerColor(this.agente.coloresGradiente[0],20) +';'
}

obtenerResultado():string{
  if(this.rondasContrario > this.rondasPropio)
    return "Derrota"
  if(this.rondasContrario == this.rondasPropio)
    return "Empate"
  return "Victoria"
}

 asignarRondas():void{  
  if(this.partida.stats.equipo.toUpperCase() == "RED"){
    this.rondasPropio = this.partida.resultados.rojo
    this.rondasContrario = this.partida.resultados.azul
  }
  else{
    this.rondasPropio = this.partida.resultados.azul
    this.rondasContrario = this.partida.resultados.rojo
  }
} 


}
