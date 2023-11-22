import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, map, of } from "rxjs"
import { environment } from "src/environments/environment"
import { Partida } from "../models/partida"



@Injectable({
    providedIn: 'root'
  })
  export class PartidaService {
  

    constructor(private http: HttpClient) {
    }
   
   
    obtenerUltimasPartidas(usuario:string,tag:string,cantidad:number): Observable<Partida[]>{
      const url = environment.backendForFrontendUrl+"/partidas/"+usuario+"/"+tag
      const partidasStorage = sessionStorage.getItem("partidas-"+usuario)
      if (partidasStorage == null){
        return this.http.get(url).pipe(map((response:any)=>{
            const partidas = response as Partida[];
            let partidasRecortada = partidas.slice(0,5);
            sessionStorage.setItem("partidas-"+usuario,JSON.stringify(partidasRecortada));
            return partidasRecortada
        }))     
     }
      else{                   
          const jsonArray: any[] = JSON.parse(partidasStorage)
          return of(jsonArray.map((response:any)=> response as Partida))     
      }
    }
    
    
  
  }