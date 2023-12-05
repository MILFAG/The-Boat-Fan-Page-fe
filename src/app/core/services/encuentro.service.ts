import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Encuentro } from '../models/encuentro';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EncuentroService {

    url:string = environment.backendForFrontendUrl+"/encuentros"
    cabeceraAlerta = "Error al conectar al servicio encuentros"

  constructor(private http: HttpClient) {    
  }
 
  
  obtenerEncuentros(): Observable<Encuentro[]>{
    const url = this.url
    return  this.http.get(url).pipe(map((response:any)=> response as Encuentro[]))         
  }

  eliminarEncuentro(id: string):Observable<any>{
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

  actualizarEncuentro(jugador: Encuentro):Observable<any>{
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

  agregarEncuentro(jugador: Encuentro):Observable<any>{
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