import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { ForbiddenComponent } from './features/forbidden/forbidden.component';
import { Error404Component } from './features/error404/error404.component';
import { ViajesComponent } from './features/viajes/viajes.component';
import { authGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './features/register/register.component';
import { ViajeFormularioComponent } from './features/viaje-formulario/viaje-formulario.component';

export const routes: Routes = [
  {
    path: '', // Ruta inicial
    component: HomeComponent,
  },
  {
    path: 'login', // Página de inicio de sesión
    component: LoginComponent,
  },
  {
    path: 'register', // Página de inicio de sesión
    component: RegisterComponent,
  },
  {
    path: 'viajes', // Página protegida
    component: ViajesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viaje-formulario', // Página protegida
    component: ViajeFormularioComponent,
    canActivate: [authGuard],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '**', // Ruta común para 404
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
