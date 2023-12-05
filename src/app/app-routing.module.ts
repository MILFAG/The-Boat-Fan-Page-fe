import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AppComponent } from './app.component';
import { ContainerSaleroComponent } from './core/components/container-salero/container-salero.component';
import { SponsorListadoComponent } from './core/components/sponsor-listado/sponsor-listado.component';
import { HomeComponent } from './core/components/home/home.component';
import { LastGameJugadorComponent } from './core/components/last-game-jugador/last-game-jugador.component';
import { AbmSponsorsComponent } from './core/components/abm-sponsors/abm-sponsors.component';
import { AbmJugadoresComponent } from './core/components/abm-jugadores/abm-jugadores.component';
import { AbmEncuentrosComponent } from './core/components/abm-encuentros/abm-encuentros.component';

const routes: Routes = [
  //{ path: '', canActivate: [AuthGuard]},
  //{ path: '/coso', component: AppComponent, canActivate: [AuthGuard]}
  { path: 'home', component: HomeComponent},
  { path: 'equipo', component: ContainerSaleroComponent},
  { path: 'partidas', component: LastGameJugadorComponent},
  { path: 'sponsors', component: SponsorListadoComponent}, 
  { path: 'jugadorABM', component: AbmJugadoresComponent}, 
  { path: 'sponsorABM', component: AbmSponsorsComponent},
  { path: 'encuentroABM', component: AbmEncuentrosComponent},

  { path: '**', redirectTo: 'home' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
