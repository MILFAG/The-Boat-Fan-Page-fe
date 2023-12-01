import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Encuentro } from '../models/encuentro';

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

}