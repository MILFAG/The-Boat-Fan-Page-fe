import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AppComponent } from './app.component';
import { ContainerSaleroComponent } from './core/components/container-salero/container-salero.component';
import { SponsorListadoComponent } from './core/components/sponsor-listado/sponsor-listado.component';
import { HomeComponent } from './core/components/home/home.component';
import { LastGameJugadorComponent } from './core/components/last-game-jugador/last-game-jugador.component';

const routes: Routes = [
  //{ path: '', canActivate: [AuthGuard]},
  //{ path: '/coso', component: AppComponent, canActivate: [AuthGuard]}
  { path: 'home', component: HomeComponent},
  { path: 'equipo', component: ContainerSaleroComponent},
  { path: 'estadisticas', component: LastGameJugadorComponent},
  { path: 'sponsor', component: SponsorListadoComponent}, 
  { path: '**', redirectTo: 'home' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
