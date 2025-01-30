import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../core/services/viajes.service'; // Importa el servicio para obtener los viajes
import { Router } from '@angular/router'; // Importa el Router para realizar la redirección

@Component({
  selector: 'app-viajes', // Selector del componente
  standalone: false,
  templateUrl: './viajes.component.html', // Archivo de plantilla HTML asociado
  styleUrls: ['./viajes.component.scss'], // Archivo de estilos SCSS asociado
})
export class ViajesComponent implements OnInit {
  viajes: any[] = []; // Almacena los viajes obtenidos del servicio
  error: string | null = null; // Almacena un mensaje de error si ocurre

  constructor(private viajesService: ViajesService, private router: Router) {} // Inyecta el servicio ViajesService y el Router

  ngOnInit() {
    // Llama al servicio para obtener los viajes mediante un observable
    this.viajesService.fetchViajes().subscribe({
      // Manejo exitoso de la respuesta
      next: (res: any) => {
        this.viajes = res;
      },
      // Manejo de errores
      error: (err) => {
        if (err.status === 403) {
          // Si el error es 403, redirige al componente ForbiddenComponent
          this.router.navigate(['/forbidden']);
        } else {
          // Si ocurre otro error, muestra un mensaje genérico
          this.error = 'An error occurred';
        }
      },
    });
  }
}
