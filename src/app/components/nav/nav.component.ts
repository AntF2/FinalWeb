import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router) {}

  // Verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return localStorage.getItem('login') === 'true';
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('role'); // Si tienes el rol almacenado, también lo puedes eliminar
    this.router.navigate(['/home']); // Redirigir a la página de inicio o login
  }
}
