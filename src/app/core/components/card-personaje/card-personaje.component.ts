import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EstadisticasService } from '../../services/estadisticas.service';
import { Estadisticas } from '../../models/estadisticas';
import { Rango } from '../../models/rango';
import { RangoService } from '../../services/rango.service';




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
  estiloFrontal: string =  '';
  estiloTrasero: string = '';
  estiloRango: string = 'max-width: 50%; height: 25%;';
  estiloAgente: string = 'max-width: 200%; height: 90%; object-fit: cover; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1px));'
  constructor(private rangoService: RangoService, private estadisticasService: EstadisticasService, private agenteService: AgenteService, private http: HttpClient) {   
    

  }
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
            console.log(estadisticas.ultimaPartida)       
          this.crearEstiloTrasero()
          
          }
        )
      }
    );
  }
  
  crearEstiloFrontal():void{ 
  const color0 = '#'+this.agente.coloresGradiente[0]
  const color1 = '#'+this.agente.coloresGradiente[1]
  const color2 = '#'+this.agente.coloresGradiente[2]    
  this.estiloFrontal = ' border: 2px solid'+this.aclararColor(color2,30)+';'
  this.estiloFrontal += 'background: linear-gradient(#222222,#444444,'+this.aclararColor(color2,15)+');';
  this.estiloFrontal += 'overflow: hidden; display: flex; align-items: center; justify-content: center; text-color'
 
  }

  crearEstiloTrasero():void{    
    const colorFondo = '#'+this.rango.colorFondo
    const colorRango = ""+ this.rango.color
    this.estiloTrasero = ' border: 2px solid'+this.oscurecerColor(colorRango,30)+';'
    this.estiloTrasero += 'display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(#222222,#444444,'+this.oscurecerColor(colorRango,30)+');';   

   
  }
   
formatearFecha(fecha:string):string{
  const fechaFormateada = new Date(fecha)
  return fechaFormateada.toLocaleDateString("es-AR",{hour: "numeric", minute: "numeric", second: "numeric"})
}
  
aclararColor(color:string, porcentaje:number):String{
  color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
  porcentaje = Math.floor((255*porcentaje)/100);
  return color = `#${this.agregarLuminosidad(color.substring(0,2), porcentaje)}${this.agregarLuminosidad(color.substring(2,4), porcentaje)}${this.agregarLuminosidad(color.substring(4,6), porcentaje)}`;
}

private agregarLuminosidad(color:string, amount:number):string{
  let cc = parseInt(color,16) + amount;
  let c = (cc > 255) ? 255 : (cc);
  return (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
}


private extraerLuminosidad (color:string, amount:number):string{
  let cc = parseInt(color,16) - amount;
  let c = (cc < 0) ? 0 : (cc);
  return (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
}

private oscurecerColor (color:string, amount:number){
  color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
  amount = Math.floor((255*amount)/100);
  return color = `#${this.extraerLuminosidad(color.substring(0,2), amount)}${this.extraerLuminosidad(color.substring(2,4), amount)}${this.extraerLuminosidad(color.substring(4,6), amount)}`;
}



}

