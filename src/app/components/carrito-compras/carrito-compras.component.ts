// carrito-compras.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../service/carrito-compras.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productos: any[] = [];
  totales: any = { subtotal: 0, iva: 0, total: 0 };

  constructor(private carritoService: CarritoComprasService, private router: Router) {}

  ngOnInit(): void {
    this.carritoService.obtenerProductos().subscribe(carrito => {
      this.productos = carrito;
      this.totales = this.carritoService.calcularTotales();
    });
  }
   // Función para generar la factura (redirigir a la página de la factura)
   generarFactura(): void {
    // Aquí puedes redirigir a la página de la factura
    this.router.navigate(['/factura']);
    
    // O simplemente mostrar un mensaje en consola o alert
    alert('Factura generada correctamente');
  }
}
