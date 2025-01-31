import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  persona = {
    nombre: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    username: '',
    password: '',
    esPatron: false
  };

  error: string | null = null;

  onSubmit() {
    if (!this.persona.nombre || !this.persona.apellidos || !this.persona.username || !this.persona.password) {
      this.error = "Por favor, completa todos los campos obligatorios.";
      return;
    }
    
    this.error = null;
    console.log("Datos enviados:", this.persona);

    // Aquí podrías hacer la llamada al backend para registrar a la persona.
  }
}
