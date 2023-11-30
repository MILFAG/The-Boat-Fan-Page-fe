import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule, } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { CardPersonajeComponent } from './core/components/card-personaje/card-personaje.component';
import { ContainerSaleroComponent } from './core/components/container-salero/container-salero.component';
import { SponsorListadoComponent } from './core/components/sponsor-listado/sponsor-listado.component';
import { LastGameComponent } from './core/components/last-game/last-game.component';
import { HomeComponent } from './core/components/home/home.component';
import { LastGameJugadorComponent } from './core/components/last-game-jugador/last-game-jugador.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { AbmNoticiasComponent } from './core/components/abm-noticias/abm-noticias.component';
import { AbmSponsorsComponent } from './core/components/abm-sponsors/abm-sponsors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbmJugadoresComponent } from './core/components/abm-jugadores/abm-jugadores.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import { EditarJugadorComponent } from './core/components/abm-jugadores/editar-jugador/editar-jugador.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { EditarSponsorComponent } from './core/components/abm-sponsors/editar-sponsor/editar-sponsor.component';
import { SlideLastGameJugadorComponent } from './core/components/last-game-jugador/slide-last-game-jugador/slide-last-game-jugador.component';
import { EditarNoticiaComponent } from './core/components/abm-noticias/editar-noticia/editar-noticia.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './core/init/keycloak-init.factory';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPersonajeComponent,
    ContainerSaleroComponent,
    SponsorListadoComponent,
    LastGameComponent,
    HomeComponent,
    LastGameJugadorComponent,
    AbmNoticiasComponent,
    AbmSponsorsComponent,
    AbmJugadoresComponent,
    EditarJugadorComponent,
    EditarSponsorComponent,
    SlideLastGameJugadorComponent,
    EditarNoticiaComponent,
    
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [

    {provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
     {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { 
  
}
