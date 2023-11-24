import { Injectable } from "@angular/core"
import { Sponsor } from "../models/sponsor"
import { Observable, map, of, throwError } from "rxjs"
import { catchError, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment"
import { HttpClient  } from "@angular/common/http"
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  export class SponsorService {
  
    url:string = environment.backendForFrontendUrl+"/sponsors"
    cabeceraAlerta = "Error al conectar al servicio sponsors"

    constructor(private http: HttpClient) {
    }
   
    
    obtenerSponsors(): Observable<Sponsor[]>{
      const url = this.url
      return  this.http.get(url).pipe(map((response:any)=> response as Sponsor[]))         
    }
  
    eliminarSponsor(id: number):Observable<any>{
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

    actualizarSponsor(sponsor: Sponsor):Observable<any>{
      const url = this.url
      return this.http.put<any>(url,sponsor).pipe(                  
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

    agregarSponsor(sponsor: Sponsor):Observable<any>{
      const url = this.url
      return this.http.post<any>(url,sponsor).pipe(                  
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