// carrito-compras.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../service/carrito-compras.service';
import { CommonModule } from '@angular/common';

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

  constructor(private carritoService: CarritoComprasService) {}

  ngOnInit() {
    this.carritoService.obtenerProductos().subscribe(productos => {
      this.productos = productos;
      this.totales = this.carritoService.calcularTotales();
    });
  }
}
