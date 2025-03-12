import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import {  TablaProductosComponent } from './components/tabla-productos/tabla-productos.component'; // Asegúrate de importar el componente Tabla
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'productos', component: ProductosComponent, canActivate:[loginGuard]},
  { path: 'productos/tabla/:categoria', component: TablaProductosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404Component },
];