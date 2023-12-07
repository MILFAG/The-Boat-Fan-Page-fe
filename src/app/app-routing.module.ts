import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { ContainerSaleroComponent } from './core/components/container-salero/container-salero.component';
import { SponsorListadoComponent } from './core/components/sponsor-listado/sponsor-listado.component';
import { HomeComponent } from './core/components/home/home.component';
import { LastGameJugadorComponent } from './core/components/last-game-jugador/last-game-jugador.component';
import { AbmSponsorsComponent } from './core/components/abm-sponsors/abm-sponsors.component';
import { AbmJugadoresComponent } from './core/components/abm-jugadores/abm-jugadores.component';
import { AbmEncuentrosComponent } from './core/components/abm-encuentros/abm-encuentros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'equipo', component: ContainerSaleroComponent},
  { path: 'partidas', component: LastGameJugadorComponent},
  { path: 'sponsors', component: SponsorListadoComponent}, 
  { path: 'jugadorABM', component: AbmJugadoresComponent, canActivate: [AuthGuard]}, 
  { path: 'sponsorABM', component: AbmSponsorsComponent , canActivate: [AuthGuard]},
  { path: 'encuentroABM', component: AbmEncuentrosComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'home' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
