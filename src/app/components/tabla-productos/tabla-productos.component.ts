import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProducosService } from '../../service/producos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  categoria: string = '';
  productos: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, // Inyectamos ActivatedRoute
    private producosService: ProducosService
  ) { }

  ngOnInit() {
    // Obtenemos el parámetro 'categoria' de la URL
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoria = params.get('categoria')!;
      this.cargarProductos();
    });
  }

  cargarProductos() {
    // Usamos el método genérico para obtener los productos por categoría
    this.producosService.getProductosPorCategoria(this.categoria).subscribe(
      productos => {
        this.productos = productos; // Asignamos los productos a la propiedad 'productos'
      },
      error => {
        console.error('Error obteniendo productos:', error);
        this.productos = []; // Si hay error, mostramos un array vacío
      }
    );
  }
}
