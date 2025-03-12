import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProducosService } from '../../service/producos.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  categoria: string = '';
  id: number = 0;
  producto$: Observable<any> | null = null;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProducosService
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
  
}
