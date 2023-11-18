import { Injectable } from "@angular/core"
import { Jugador } from "../models/jugador"
import { Observable, map, of } from "rxjs"
import { environment } from "src/environments/environment"
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
  })
  export class JugadorService {
  

    constructor(private http: HttpClient) {
    }
   
    
    obtenerJugadores(): Observable<Jugador[]>{
      const url = environment.backendForFrontendUrl+"/jugadores"
      const jugadorStorage = sessionStorage.getItem("jugadores")
      if (jugadorStorage == null){
        const jugadores = this.http.get(url).pipe(map((response:any)=> response as Jugador[]))         
        jugadores.subscribe((response:any)=>{
          const jugadores = response as Jugador[]     
          sessionStorage.setItem("jugadores",JSON.stringify(jugadores));
          })        
        return jugadores
     }
      else{                   
          const jsonArray: any[] = JSON.parse(jugadorStorage)
          return of(jsonArray.map((response:any)=> response as Jugador))     
      }
    }
  
  
  }