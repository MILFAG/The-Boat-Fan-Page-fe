import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agente } from '../models/agente';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Estadisticas } from '../models/estadisticas';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  

  constructor(private http: HttpClient) {    
  }
 
  
  obtenerEstadisticasJugador(usuario:string, tag:string): Observable<Estadisticas>{    
    const url = environment.backendForFrontendUrl+"/estadisticas/"+usuario+"/"+tag
    const estadisticasStorage = sessionStorage.getItem("estadisticas"+usuario)      
    if (estadisticasStorage == null){
      const estadisticas = this.http.get(url).pipe(map((response:any)=> response as Estadisticas))             
      estadisticas.subscribe((response:any)=>{
        const est = response as Estadisticas    
        sessionStorage.setItem("estadisticas"+usuario,JSON.stringify(est));       
        })         
      return estadisticas
   }
   else{  
       const objeto: any = JSON.parse(estadisticasStorage)
        return of(objeto as Estadisticas)       
    }
  }


}