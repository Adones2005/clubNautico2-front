import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // No necesario en el componente si no es standalone
import { CommonModule } from '@angular/common'; // No necesario en el componente si no es standalone

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        this.auth.setToken(res.token); // Guardar el token en el servicio
        this.router.navigate(['/viajes']); // Redirigir a la página de viajes
      },
      error: (err) => {
        this.error = 'Usuario y contraseña inválidos'; // Mostrar mensaje de error
      },
    });
  }
}