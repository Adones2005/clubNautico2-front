import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';


@Injectable({
 providedIn: 'root'
})
export class ViajesService {


 constructor(private http: HttpClient, private authService: AuthService) { }


 /**
  * Método para obtener las regiones desde la API.
  * @returns Observable que emite la lista de regiones.
  */
 fetchViajes(): Observable<any> {
   const token = this.authService.getToken(); // Obtén el token del AuthService


   if (!token) {
     // Si no hay token, lanza un error indicando que el usuario no está autorizado.
     return throwError(() => new Error('Unauthorized'));
   }


   // Realiza la solicitud GET al endpoint de viajes con el token en el encabezado.
   return this.http.get(`${environment.apiUrl}/viajes`, {
     headers: new HttpHeaders({
       Authorization: `Bearer ${token}`,
     }),
   });
 }
}
