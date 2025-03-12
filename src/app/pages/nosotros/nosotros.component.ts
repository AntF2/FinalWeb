import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  constructor(private router: Router) { }
  
    // Función para cerrar sesión
    logout(): void {
      // Eliminar el token de localStorage
      localStorage.removeItem('login');
  
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['login']);
    }
}
