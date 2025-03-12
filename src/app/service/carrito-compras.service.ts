// carrito-compras.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  private productos: any[] = []; // Productos en el carrito
  private carritoSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.productos);

  constructor() {}

  // Agregar un producto al carrito
  agregarProducto(producto: any, cantidad: number) {
    const productoExistente = this.productos.find(p => p.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      this.productos.push({ ...producto, cantidad });
    }

    this.carritoSubject.next(this.productos);
  }

  // Obtener los productos del carrito
  obtenerProductos() {
    return this.carritoSubject.asObservable();
  }

  // Calcular subtotal, IVA y total
  calcularTotales() {
    let subtotal = 0;
    this.productos.forEach(producto => {
      subtotal += producto.precio * producto.cantidad;
    });

    const iva = subtotal * 0.16; // 16% de IVA
    const total = subtotal + iva;

    return { subtotal, iva, total };
  }
}
