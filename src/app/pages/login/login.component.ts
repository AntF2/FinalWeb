import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private sercivio: LoginService, private route: Router) {}

  // Función para manejar el login
  login(loginForm: any): void {
    console.log(loginForm.value);

    // Llamada al servicio para hacer login
    this.sercivio.postLogin(loginForm.value).subscribe(
      acceso => {
        console.log(acceso);
        let token = acceso.accesstoken;

        // Verifica si se obtuvo un token válido
        if (token !== '') {
          localStorage.setItem('login', 'true'); // Guarda el estado de login
          this.route.navigate(['productos']); // Redirige a la página privada (ajustar ruta si es necesario)
        }
      },
      error => {
        console.error('Error de autenticación:', error); // Muestra el error si falla la autenticación
      }
    );
  }
}