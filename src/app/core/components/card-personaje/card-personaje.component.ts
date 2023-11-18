import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit{
  @Input()
  jugador!: Jugador;
  agente!: Agente;
  estilo: string =  'width:25%; height:85%; box-sizing: border-box; padding:10%; border-radius: 0.8rem; margin-right: 0.5rem; margin:1rem; transition: transform 0.5s ease-out;';
  
  
  constructor(private agenteService: AgenteService) {     

  }
  ngOnInit(): void {    
    this.obtenerAgente()  
    this.crearEstilo()  
       
  }
  
  obtenerAgente():void{
    this.agenteService.obtenerAgentePorNombre(this.jugador.nombreAgente).subscribe(
      (agente) => {
        this.agente = agente as Agente;       
      }
    )    
  }

  crearEstilo():void{
 
  let color0 = '#'+this.agente.coloresGradiente[0]
  let color1 = '#'+this.agente.coloresGradiente[1]
  let color2 = '#'+this.agente.coloresGradiente[2]
  
  this.estilo = 'width:25%; height:85%; box-sizing: border-box; padding:10%; border-radius: 0.8rem; margin-right: 0.5rem; margin:1rem; transition: transform 0.5s ease-out; border: 1px solid #857BFF;'
  //this.estilo += ('background: linear-gradient(180deg, rgba(92, 83, 117, 0.45) 48.37% ,rgba(92, 83, 117, 0.45) 48.37%, rgba(61, 59, 59, 0.20) 100%)')
  this.estilo += 'background: linear-gradient(0.33turn,'+color1+','+ color0+','+color2+')';

  }

  aclararColor():string{
    return ""
  }

}

