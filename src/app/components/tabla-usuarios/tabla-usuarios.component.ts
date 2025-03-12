import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css'
})
  export class TablaUsuariosComponent implements OnInit {
    usuarios: any[] = [];
    userToEdit: any = null; // Para editar un usuario
  
    constructor(private usersService: UsuariosService, private router: Router) {}
  
    ngOnInit(): void {
      this.getUsers(); // Cargar los usuarios al iniciar
    }
  
    // Obtener la lista de usuarios
    getUsers(): void {
      this.usersService.getUsers().subscribe(
        (data) => {
          this.usuarios = data;
        },
        (error) => {
          console.error('Error al obtener usuarios', error);
        }
      );
    }
  
    // Agregar un nuevo usuario
    addUser(user: any): void {
      this.usersService.createUser(user).subscribe(
        (data) => {
          this.getUsers(); // Recargar la lista de usuarios
        },
        (error) => {
          console.error('Error al agregar usuario', error);
        }
      );
    }
  
    // Editar un usuario
    editUser(user: any): void {
      this.userToEdit = { ...user }; // Pre-cargar los datos en el formulario de edición
    }
  
    // Guardar los cambios después de editar
    saveUser(): void {
      if (this.userToEdit && this.userToEdit.id) {
        this.usersService.updateUser(this.userToEdit.id, this.userToEdit).subscribe(
          (data) => {
            this.getUsers(); // Recargar la lista de usuarios
            this.userToEdit = null; // Limpiar el formulario de edición
          },
          (error) => {
            console.error('Error al actualizar usuario', error);
          }
        );
      }
    }
  
    // Eliminar un usuario
    deleteUser(id: number): void {
      this.usersService.deleteUser(id).subscribe(
        (data) => {
          this.getUsers(); // Recargar la lista de usuarios
        },
        (error) => {
          console.error('Error al eliminar usuario', error);
        }
      );
    }
  }

