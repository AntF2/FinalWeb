import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProducosService {
  private API_URL = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  // Método general para obtener productos según la categoría
  getProductosPorCategoria(categoria: string): Observable<any[]> {
    // Normalizar el nombre de la categoría, eliminando los guiones
    const categoriaNormalizada = categoria.replace(/-/g, '');
  
    return this.http.get<{ [key: string]: any[] }>(this.API_URL).pipe(
      map(data => {
        if (!data[categoriaNormalizada]) {
          throw new Error(`Categoría no encontrada: ${categoria}`);
        }
        return data[categoriaNormalizada] || [];
      }),
      catchError(error => {
        console.error('Error obteniendo productos:', error);
        return throwError(() => new Error('Error obteniendo productos'));
      })
    );
  }
  

  // Método para obtener un producto específico por categoría y ID
  getProductoPorCategoriaYId(categoria: string, id: number): Observable<any> {
    return this.getProductosPorCategoria(categoria).pipe(
      map(productos => {
        const producto = productos.find(p => p.id === id);
        if (!producto) {
          throw new Error(`Producto con ID ${id} no encontrado en categoría ${categoria}`);
        }
        return producto;
      }),
      catchError(error => {
        console.error('Error obteniendo producto:', error);
        return throwError(() => new Error('Error obteniendo producto'));
      })
    );
  }
}
