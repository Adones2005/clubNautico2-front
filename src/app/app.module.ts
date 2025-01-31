import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ForbiddenComponent } from './features/forbidden/forbidden.component';
import { Error404Component } from './features/error404/error404.component';
import { LoginComponent } from './features/login/login.component'; // Importar LoginComponent
import { ViajesComponent } from './features/viajes/viajes.component';
import { provideHttpClient } from '@angular/common/http';
import { RegisterComponent } from './features/register/register.component';
import { ViajeFormularioComponent } from './features/viaje-formulario/viaje-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ForbiddenComponent,
    Error404Component,
    LoginComponent, // Declarar LoginComponent aquí
    ViajesComponent,
    RegisterComponent,
    ViajeFormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añadir FormsModule para soportar formularios
    CommonModule, // Añadir CommonModule
    RouterModule, // Añadir RouterModule para navegación
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}