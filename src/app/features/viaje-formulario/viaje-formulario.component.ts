import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../core/services/viajes.service';
import { PersonasService } from '../../core/services/personas.service';
import { BarcosService } from '../../core/services/barcos.service'; // Importamos BarcosService
import { AuthService } from '../../core/services/auth.service'; // Asegúrate de tener AuthService
import { HttpHeaders } from '@angular/common/http'; // Importamos HttpHeaders

@Component({
  selector: 'app-viaje-formulario',
  standalone: false,
  templateUrl: './viaje-formulario.component.html',
  styleUrls: ['./viaje-formulario.component.scss']
})
export class ViajeFormularioComponent implements OnInit {
  viaje: any = {
    descripcion: '',
    fechaHora: '',
    organizador: null,
    barco: null
  };
  personas: any[] = []; // Almacena las personas
  barcos: any[] = []; // Almacena los barcos
  error: string | null = null; // Error en caso de fallo

  constructor(
    private viajesService: ViajesService,
    private personaService: PersonasService,
    private barcosService: BarcosService,
    private authService: AuthService // Inyectamos AuthService para obtener el token
  ) {}

  ngOnInit(): void {

    // Construir los encabezados con el token
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Cargar las personas
    this.personaService.getPersonas().subscribe(personas => {
      this.personas = personas;
    });

    // Cargar los barcos
    this.barcosService.getBarcos().subscribe(barcos => {
      this.barcos = barcos;
    });
  }

  onSubmit(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    if (!this.viaje.descripcion || !this.viaje.fechaHora || !this.viaje.organizador || !this.viaje.barco) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    
      // Llamada al servicio para guardar el viaje con los encabezados
      this.viajesService.createViaje(this.viaje).subscribe({
        next: () => {
          console.log('Viaje creado correctamente');
          // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
        },
        error: (err) => {
          console.error('Error al crear el viaje:', err);
          this.error = 'Hubo un problema al registrar el viaje';
        }
      });
  }
}
