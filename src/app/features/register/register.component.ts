import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  persona = {
    nombre: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    username: '',
    password: '',
    esPatron: false,
  };

  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register(this.persona).subscribe({
      next: () => {
        this.router.navigate(['/login']); // Redirigir al login después del registro
      },
      error: () => {
        this.error = 'Error al registrar usuario'; // Mostrar mensaje de error
      },
    });
  }
}
