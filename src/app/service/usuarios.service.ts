import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private API_URL = 'http://localhost:3000/users'; // Asegúrate de que esta URL sea la correcta

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  // Crear un nuevo usuario
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.API_URL, user);
  }

  // Actualizar un usuario
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, user);
  }

  // Eliminar un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
