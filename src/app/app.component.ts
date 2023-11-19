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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dacs2023';
  public isLogueado = false;
  
  /*public testResponse : ITestResponse  | null = null;
  public perfilUsuario: KeycloakProfile | null = null;*/
  public role = false;
  constructor(/*private readonly keycloak: KeycloakService,private apiService: ApiService*/  private rangoService: RangoService ) {}

  public async ngOnInit() {
   /* this.isLogueado = await this.keycloak.isLoggedIn();
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

   let jugador;
   this.rangoService.obtenerRangos().subscribe((response:any)=>{
    jugador = response as Rango[]    
    })
    
  }

  /*public iniciarSesion() {
    this.keycloak.login();
  }

  public cerrarSesion() {
    this.keycloak.logout();
  }*/
  
  




  
}


