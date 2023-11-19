import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agente } from '../models/agente';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AgenteService {
  

  constructor(private http: HttpClient) {    
  }
 
  
  obtenerAgentes(): Observable<Agente[]>{
    const url = environment.backendForFrontendUrl+"/agentes"
    const agenteStorage = sessionStorage.getItem("agentes")  
    if (agenteStorage == null){
      let agentes = this.http.get(url).pipe(map((response:any)=> response as Agente[]))         
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

   obtenerAgentePorNombre(nombre: string):Observable<Agente | undefined> {     
  let agenteStorage = sessionStorage.getItem("agentes")  
  if(!agenteStorage){
    return this.obtenerAgentes().pipe(
      map((agentes:Agente[]) => agentes.find((agente:Agente) => agente.nombre.trim().toUpperCase() == nombre.trim().toUpperCase()))
    )    
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
 /* obtenerAgentes(): Observable<Agente[]>{
    const url = environment.backendForFrontendUrl+"/agentes"
    return this.http.get(url).pipe(
      map((response:any)=> response as Agente[])
    )
  }

  obtenerAgentePorNombre(nombre:string):Observable<Agente|undefined>{
    return this.obtenerAgentes().pipe(
      map((agentes: Agente[]) => agentes.find(agente => agente.nombre.toLowerCase().includes(nombre.toLowerCase())))
    );
  }*/
   
}
