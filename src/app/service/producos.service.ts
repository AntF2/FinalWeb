import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProducosService {
  private API_URL = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getBellezaJoyeria(): Observable<any[]> {
    return this.http.get<{ bellezajoyeria: any[] }>(this.API_URL).pipe(
      map(data => data.bellezajoyeria || [])
    );
  }

  getTecnologia(): Observable<any[]> {
    return this.http.get<{ tecnologia: any[] }>(this.API_URL).pipe(
      map(data => data.tecnologia || [])
    );
  }

  getElectrodomesticos(): Observable<any[]> {
    return this.http.get<{ electrodomesticos: any[] }>(this.API_URL).pipe(
      map(data => data.electrodomesticos || [])
    );
  }

  getUtilesEscolares(): Observable<any[]> {
    return this.http.get<{ utilesescolares: any[] }>(this.API_URL).pipe(
      map(data => data.utilesescolares || [])
    );
  }

  getInstrumentosMusicales(): Observable<any[]> {
    return this.http.get<{ instrumentosmusicales: any[] }>(this.API_URL).pipe(
      map(data => data.instrumentosmusicales || [])
    );
  }

  getAccesoriosMascotas(): Observable<any[]> {
    return this.http.get<{ accesoriosmascotas: any[] }>(this.API_URL).pipe(
      map(data => data.accesoriosmascotas || [])
    );
  }

  getProductoPorCategoriaYId(categoria: string, id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${categoria}/${id}`);
  }
}