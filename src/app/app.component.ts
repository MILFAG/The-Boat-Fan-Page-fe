import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { ApiService } from './core/services/apiservice.service';
import { ITestResponse } from './core/models/response.interface';
import { AgenteService } from './core/services/agente.service';
import { Agente } from './core/models/agente';
import { HttpClient } from '@angular/common/http';
import { JugadorService } from './core/services/jugador.service';
import { RangoService } from './core/services/rango.service';
import { Rango } from './core/models/rango';
import { EstadisticasService } from './core/services/estadisticas.service';
import { Estadisticas } from './core/models/estadisticas';
import { PartidaService } from './core/services/partida.service';
import { Partida } from './core/models/partida';
import { UsuarioService } from './core/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Boat';
  public isLogueado = false;
  
  /*public testResponse : ITestResponse  | null = null;
 */
  public role = false;
  constructor(private readonly keycloak: KeycloakService,/*private apiService: ApiService*/ private usuarioService: UsuarioService ) {}

  public async ngOnInit() {
   /* 
    this.role=await this.keycloak.isUserInRole("ROLE-A");
    this.apiService.getTest().subscribe(resp => {this.testResponse= resp});
    console.log ("role=====>", this.role );
    if(this.isLogueado && !this.role){
      this.keycloak.logout();
      return;
    }
    type rolesUsuarios = Array<{id: number, text: string}>;

    if (this.isLogueado) {
      this.perfilUsuario = await this.keycloak.loadUserProfile();
    }*/


 /*    if (!await this.usuarioService.logueado()){
      this.usuarioService.iniciarSesion()
    }
    else{
      console.log('hola') 
    } 
    console.log(await this.usuarioService.logueado())
   
       */
 


  
  }



  
  




  
}


