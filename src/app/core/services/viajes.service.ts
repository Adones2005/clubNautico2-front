import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Método para obtener los viajes desde la API.
   * @returns Observable que emite la lista de viajes.
   */
  fetchViajes(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return throwError(() => new Error('Unauthorized'));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.apiUrl}/viajes`, { headers });
  }

  /**
   * Método para eliminar un viaje por ID.
   * @param viajeId El ID del viaje a eliminar.
   * @returns Observable de la respuesta del servidor.
   */
  deleteViaje(viajeId: number): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return throwError(() => new Error('Unauthorized'));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${environment.apiUrl}/viajes/${viajeId}`, { headers });
  }

  /**
   * Método para crear un nuevo viaje.
   * @param viaje Los datos del viaje a crear.
   * @returns Observable con la respuesta del servidor.
   */
  createViaje(viaje: any): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return throwError(() => new Error('Unauthorized'));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    return this.http.post(`${environment.apiUrl}/viajes`, viaje, { headers });
  }
}
