import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', canActivate: [AuthGuard]},
  //{ path: '/coso', component: AppComponent, canActivate: [AuthGuard]}
  { path: '**', redirectTo: '' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
