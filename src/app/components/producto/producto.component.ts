// producto.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarritoComprasService } from '../../service/carrito-compras.service';  // Nuevo servicio
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  categoria: string = '';
  id: number = 0;
  producto$: Observable<any> | null = null;
  error: boolean = false;
  cantidad: number = 1; // Nueva propiedad para la cantidad seleccionada

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private carritoService: CarritoComprasService // Inyección del servicio
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria')!;
      this.id = parseInt(params.get('id')!, 10);
      this.cargarProducto();
    });
  }

  cargarProducto() {
    this.producto$ = this.productosService.getProductoPorCategoriaYId(this.categoria, this.id).pipe(
      catchError(error => {
        console.error('Error cargando el producto:', error);
        this.error = true;
        return of(null);
      })
    );
  }

  // Método para agregar al carrito
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto, this.cantidad); // Agregar producto con cantidad
    alert('Producto agregado al carrito con éxito');
  }
}
