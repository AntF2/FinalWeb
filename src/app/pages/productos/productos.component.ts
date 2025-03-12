import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private router: Router) { }

  // Función para cerrar sesión
  logout(): void {
    // Eliminar el token de localStorage
    localStorage.removeItem('login');

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['login']);
  }
}