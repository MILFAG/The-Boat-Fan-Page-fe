import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit{
  @Input()
  jugador!: Jugador;  
  agente!: Agente;
  
  estiloDiv: string =  '';
  estiloImg: string = 'max-width: 400%; height: 175%; object-fit: cover; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1px));'
  constructor(private agenteService: AgenteService, private http: HttpClient) {   
    

  }
  ngOnInit(): void {           
    this.obtenerAgente()
  }

  obtenerAgente(): void {
    this.agenteService.obtenerAgentePorNombre(this.jugador.nombreAgente).subscribe(
      (agente) => {
        this.agente = agente as Agente;        
        this.crearEstilos()      
      },
      (error) => {
        console.error('Error al obtener el agente:', error);
      }
    );
  }
  
  crearEstilos():void{ 
  let color0 = '#'+this.agente.coloresGradiente[0]
  let color1 = '#'+this.agente.coloresGradiente[1]
  let color2 = '#'+this.agente.coloresGradiente[2]  
  this.estiloDiv = 'width:25%; height:85%; box-sizing: border-box; padding:10%; border-radius: 0.8rem; margin-right: 0.5rem; margin:1rem; transition: transform 0.5s ease-out; border: 2px solid'+this.aclararColor(color2,30)+';'
  this.estiloDiv += 'background: linear-gradient(#222222,#444444,'+this.aclararColor(color2,15)+');';
  //console.log(this.agente.imagenCompleta)
  this.estiloDiv += 'overflow: hidden; display: flex; align-items: center; justify-content: center;'
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

/*
private subtractLight (color:string, amount:number):string{
  let cc = parseInt(color,16) - amount;
  let c = (cc < 0) ? 0 : (cc);
  return (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
}

private darken (color:string, amount:number){
  color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
  amount = Math.floor((255*amount)/100);
  return color = `#${this.subtractLight(color.substring(0,2), amount)}${this.subtractLight(color.substring(2,4), amount)}${this.subtractLight(color.substring(4,6), amount)}`;
}
*/


}

