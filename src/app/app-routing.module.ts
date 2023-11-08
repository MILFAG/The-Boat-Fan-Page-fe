import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AppComponent } from './app.component';
import { ContainerSaleroComponent } from './core/components/container-salero/container-salero.component';
import { EstadisticasJugadorComponent } from './core/components/estadisticas-jugador/estadisticas-jugador.component';
import { SponsorListadoComponent } from './core/components/sponsor-listado/sponsor-listado.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  //{ path: '', canActivate: [AuthGuard]},
  //{ path: '/coso', component: AppComponent, canActivate: [AuthGuard]}
  { path: 'home', component: HomeComponent},
  { path: 'equipo', component: ContainerSaleroComponent},
  { path: 'estadisticas', component: EstadisticasJugadorComponent},
  { path: 'sponsor', component: SponsorListadoComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
