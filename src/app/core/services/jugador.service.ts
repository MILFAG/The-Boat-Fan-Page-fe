import { Injectable } from "@angular/core"
import { Jugador } from "../models/jugador"
import { Observable, map, of, throwError } from "rxjs"
import { catchError, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment"
import { HttpClient  } from "@angular/common/http"
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  export class JugadorService {
  
    url:string = environment.backendForFrontendUrl+"/jugadores"
    cabeceraAlerta = "Error al conectar al servicio jugadores"

    constructor(private http: HttpClient) {
    }
   
    
    obtenerJugadores(): Observable<Jugador[]>{
      const url = this.url
      return  this.http.get(url).pipe(map((response:any)=> response as Jugador[]))         
    }
  
    eliminarJugador(id: string):Observable<any>{
      const url = this.url+'/'+id       
      console.log(url)
      return this.http.delete<any>(url,{}).pipe(                  
        catchError(e => {          
          console.error(e.error.mensaje)
          Swal.fire(
            this.cabeceraAlerta,
            e.error.mensaje,
            'error');
          return  throwError(e); 
        }),        
      )    
    } 

    actualizarJugador(jugador: Jugador):Observable<any>{
      const url = this.url
      return this.http.put<any>(url,jugador).pipe(                  
        catchError(e => {          
          console.error(e.error.mensaje)
          Swal.fire(
            this.cabeceraAlerta,
            e.error.mensaje,
            'error');
          return  throwError(e); 
        }),        
      )    
    }

    agregarJugador(jugador: Jugador):Observable<any>{
      const url = this.url
      return this.http.post<any>(url,jugador).pipe(                  
        catchError(e => {          
          console.error(e.error.mensaje)
          Swal.fire(
            this.cabeceraAlerta,
            e.error.mensaje,
            'error');
          return  throwError(e); 
        }),        
      )    
    }

 
  }