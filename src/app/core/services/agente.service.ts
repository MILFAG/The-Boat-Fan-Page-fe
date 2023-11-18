import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agente } from '../models/agente';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, defaultIfEmpty, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  private agentes: Agente[]

  constructor(private http: HttpClient) {
    this.agentes = []
    this.obtenerAgentes().subscribe((data:any)=> {data as Agente[]; this.agentes = data})
  }
 
  
  obtenerAgentes(): Observable<Agente[]>{
    const url = environment.backendForFrontendUrl+"/agentes"
    const agenteStorage = sessionStorage.getItem("agentes")
    if (agenteStorage == null){
      const agentes = this.http.get(url).pipe(map((response:any)=> response as Agente[]))         
      agentes.subscribe((response:any)=>{
        const agentes = response as Agente[]     
        sessionStorage.setItem("agentes",JSON.stringify(agentes));
        })        
      return agentes
   }
   else{            
        const jsonArray: any[] = JSON.parse(agenteStorage)
        return of(jsonArray.map((response:any)=> response as Agente))     
    }
  }

obtenerAgentePorNombre(nombre: string): Observable<Agente> {     
  let agenteStorage = sessionStorage.getItem("agentes")
  if(!agenteStorage){
    this.obtenerAgentes()
    agenteStorage = sessionStorage.getItem("agentes")
  }  
  const jsonArray: Agente[] = JSON.parse(agenteStorage!) 
  let agente = jsonArray.filter(agente => agente.nombre.trim().toUpperCase() == nombre.trim().toUpperCase())
  if(agente){
    return of(agente[0])
  }
  else{
    throw Error("No se encontró el agente") 
  }  
}

   
}
