import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_URL = 'http://localhost:3000/login'; // Asegúrate de que esta URL sea correcta
  private API_REGISTER = 'http://localhost:3000/users'; // URL de registro

  constructor(private http: HttpClient) {}

  // Verificar si el usuario existe y comparar la contraseña
  postLogin(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_URL, usuario).pipe(
      map((acceso) => {
        if (acceso && acceso.accesstoken) {
          // Guarda el token y el rol en localStorage
          localStorage.setItem('login', 'true');
          localStorage.setItem('accesstoken', acceso.accesstoken); // Guarda el token
          localStorage.setItem('role', acceso.role); // Guarda el rol del usuario
        }
        return acceso;
      }),
      catchError(this.handleError)
    );
  }

  // Método para registrar un nuevo usuario
  postRegistro(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_REGISTER, usuario).pipe(
      catchError(this.handleError) // Agregamos un manejador de errores
    );
  }

  // Manejador de errores
  private handleError(error: any): Observable<any> {
    console.error('Ocurrió un error:', error);
    return new Observable(); // O puedes devolver un Observable con un mensaje de error adecuado
  }

  // Método para cerrar sesión (eliminar el token y el rol de localStorage)
  logout(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('role');
  }

  // Verificar si el usuario está autenticado
  estaAutenticado(): boolean {
    return localStorage.getItem('login') === 'true';
  }

  // Obtener el rol del usuario
  obtenerRol(): string | null {
    return localStorage.getItem('role');
  }

  // Obtener el token de acceso
  obtenerToken(): string | null {
    return localStorage.getItem('accesstoken');
  }
}
