import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './core/init/keycloak-init.factory';
import { ApiService } from './core/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { HeaderComponent } from './core/components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
=======
import { MostrarEstadisticasComponent } from './core/components/mostrar-estadisticas/mostrar-estadisticas.component';
@NgModule({
  declarations: [
    AppComponent,
    MostrarEstadisticasComponent
>>>>>>> 7f57f82d2eda80f248a4ae80711d541ad659b5df
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
