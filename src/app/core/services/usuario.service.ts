import { Injectable } from "@angular/core"
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from "keycloak-js";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService  {
    
    private perfilUsuario!: KeycloakProfile;
    private logg!: boolean;
    
    
    constructor(private readonly keycloak: KeycloakService) {
    }

 
    
    public iniciarSesion() {
        this.keycloak.login();
    }

    public cerrarSesion() {
        this.keycloak.logout();
      }

    public async obtenerPerfil(): Promise<KeycloakProfile>{
        if(!this.perfilUsuario){
            this.perfilUsuario = await this.keycloak.loadUserProfile();
            return this.perfilUsuario
        }
        return this.perfilUsuario
    }

    public async logueado ():Promise<boolean>{        
        return this.keycloak.isLoggedIn()
    } 


  }