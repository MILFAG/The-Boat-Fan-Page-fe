import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import { initializeKeycloak } from './core/init/keycloak-init.factory';
//import { ApiService } from './core/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { CardPersonajeComponent } from './core/components/card-personaje/card-personaje.component';
import { ContainerSaleroComponent } from './core/components/container-salero/container-salero.component';
import { SponsorListadoComponent } from './core/components/sponsor-listado/sponsor-listado.component';
import { LastGameComponent } from './core/components/last-game/last-game.component';
import { HomeComponent } from './core/components/home/home.component';
import { AgenteService } from './core/services/agente.service';
import { LastGameJugadorComponent } from './core/components/last-game-jugador/last-game-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPersonajeComponent,
    ContainerSaleroComponent,
    SponsorListadoComponent,
    LastGameComponent,
    HomeComponent,
    LastGameJugadorComponent
  ],
  imports: [
    BrowserModule,
    //KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    AgenteService,
  ],
 /* providers: [
    {
      provide: APP_INITIALIZER,
      //useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    ApiService,
  ],*/
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
