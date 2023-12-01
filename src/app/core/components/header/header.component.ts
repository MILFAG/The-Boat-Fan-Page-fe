import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

logueado: boolean = false;
admin: boolean = false;

constructor(private keycloak: KeycloakService) {
  
}
  async ngOnInit(): Promise<void> {
    this.logueado = await this.keycloak.isLoggedIn()
    if (this.logueado){
      this.admin = this.keycloak.isUserInRole('admin')
    }
  }

  cerrarSesion():void{
    this.keycloak.logout()
    this.logueado = false
    this.admin = false
   }

  iniciarSesion():void{
    this.keycloak.login()  
  }

}



