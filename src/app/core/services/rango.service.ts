import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, map, of } from "rxjs"
import { environment } from "src/environments/environment"
import { Rango } from "../models/rango"
import { Jugador } from "../models/jugador"

@Injectable({
    providedIn: 'root'
  })
  export class RangoService {
  

    constructor(private http: HttpClient) {
    }
   
    
    obtenerRangos(): Observable<Rango[]>{
      const url = environment.backendForFrontendUrl+"/rangos"
      const rangoStorage = sessionStorage.getItem("rangos")
      if (rangoStorage == null){
        const rangos = this.http.get(url).pipe(map((response:any)=> response as Rango[]))         
        rangos.subscribe((response:any)=>{
          const rangos = response as Rango[]     
          sessionStorage.setItem("rangos",JSON.stringify(rangos));
          })        
        return rangos
     }
      else{                   
          const jsonArray: any[] = JSON.parse(rangoStorage)
          return of(jsonArray.map((response:any)=> response as Rango))     
      }
    }
  
    
  
  }