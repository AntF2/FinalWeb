import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {

  carrito = [
    { nombre: 'Producto A', precio: 10, cantidad: 2 },
    { nombre: 'Producto B', precio: 20, cantidad: 1 }
  ];
  
  total = 0;

constructor() {
  this.calcularTotal();
}

calcularTotal() {
  this.total = this.carrito.reduce((sum, productos) => sum + (productos.precio * productos.cantidad), 0);
}

}
