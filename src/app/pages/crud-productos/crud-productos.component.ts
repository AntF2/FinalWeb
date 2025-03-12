import { Component, OnInit } from '@angular/core';
import { ProducosService } from '../../service/producos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { BrowserModule } from '@angular/platform-browser';
import { CapitalizePipe } from '../../pipe/capitalize.pipe';

@Component({
  selector: 'app-crud-productos',
  standalone: true,
  imports: [FormsModule,CommonModule, CapitalizePipe],
  templateUrl: './crud-productos.component.html',
  styleUrl: './crud-productos.component.css'
})
export class CrudProductosComponent implements OnInit {
  productos: Product[] = [];
  productToEdit: Product | null = null;
  isLoading: boolean = false;
  newProduct: Product = { id: 0, nombre: '', descripcion: '', precio: 0, imagen: '' };
  categorias: string[] = ['tecnologia', 'electrodomesticos', 'mascotas', 'instrumentos', 'utilesescolares','bellezajoyeria']; // Lista de categorías disponibles
  selectedCategoria: string = 'tecnologia'; // Categoría seleccionada por defecto

  constructor(private producService: ProducosService) {}

  ngOnInit(): void {
    this.getProductos(); // Cargar productos de la categoría por defecto
  }

  // Obtener productos de la categoría seleccionada
  getProductos(): void {
    this.isLoading = true;
    this.producService.getProductosPorCategoria(this.selectedCategoria).subscribe(
      (data: Product[]) => {
        this.productos = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener los productos:', error);
        this.isLoading = false;
      }
    );
  }

  // Cambiar categoría y recargar productos
  onCategoriaChange(): void {
    this.getProductos(); // Obtener productos de la nueva categoría seleccionada
  }

  // Agregar un nuevo producto
  addProduct(): void {
    this.productToEdit = { ...this.newProduct }; // Crear un nuevo producto vacío para editar
  }

  // Guardar el producto, ya sea agregar o editar
  saveProduct(): void {
    if (this.productToEdit) {
      if (this.productToEdit.id === 0) {
        // Agregar nuevo producto
        this.producService.addProducto(this.productToEdit).subscribe(() => {
          this.getProductos(); // Recargar productos
          this.productToEdit = null; // Limpiar formulario
        });
      } else {
        // Actualizar producto existente
        this.producService.updateProducto(this.productToEdit.id, this.productToEdit).subscribe(() => {
          this.getProductos(); // Recargar productos
          this.productToEdit = null; // Limpiar formulario
        });
      }
    }
  }

  // Editar un producto
  editProduct(product: Product): void {
    this.productToEdit = { ...product }; // Clonar el producto para editar
  }

  // Eliminar un producto
  deleteProduct(id: number): void {
    this.producService.deleteProducto(id).subscribe(() => {
      this.getProductos(); // Recargar productos después de eliminar
    });
  }

  // Cancelar la edición y limpiar el formulario
  cancelEdit(): void {
    this.productToEdit = null;
  }
}