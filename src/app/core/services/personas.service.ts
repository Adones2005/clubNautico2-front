import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  /**
   * Método para obtener la lista de personas.
   * @returns Observable que emite la lista de personas.
   */
  getPersonas(): Observable<any[]> {
    const token = this.authService.getToken(); // Obtén el token del AuthService

    if (!token) {
      return throwError(() => new Error('Unauthorized'));
    }

    // Realiza la solicitud GET al endpoint de personas con el token en el encabezado
    return this.http.get<any[]>(`${environment.apiUrl}/personas`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
