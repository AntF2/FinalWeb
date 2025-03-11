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
    // Llama al servicio según la categoría seleccionada
    switch (this.categoria) {
      case 'belleza-joyeria':
        this.producosService.getBellezaJoyeria().subscribe(p => this.productos = p);
        break;
      case 'tecnologia':
        this.producosService.getTecnologia().subscribe(p => this.productos = p);
        break;
      case 'electrodomesticos':
        this.producosService.getElectrodomesticos().subscribe(p => this.productos = p);
        break;
      case 'utiles-escolares':
        this.producosService.getUtilesEscolares().subscribe(p => this.productos = p);
        break;
      case 'instrumentos':
        this.producosService.getInstrumentosMusicales().subscribe(p => this.productos = p);
        break;
      case 'mascotas':
        this.producosService.getAccesoriosMascotas().subscribe(p => this.productos = p);
        break;
      default:
        this.productos = []; // Si la categoría no existe, muestra un array vacío
        break;
    }
  }
}