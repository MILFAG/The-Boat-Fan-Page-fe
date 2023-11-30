import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

logueado: boolean = false;
perfil!: KeycloakProfile

constructor(private usuarioService: UsuarioService) {
  
}
  async ngOnInit(): Promise<void> {
    this.logueado = await this.usuarioService.logueado()
    if (this.logueado){
      this.perfil = await this.usuarioService.obtenerPerfil()
    }
  }

  cerrarSesion():void{
    this.usuarioService.cerrarSesion()
  }

  iniciarSesion():void{
    this.usuarioService.iniciarSesion()
  }

}



