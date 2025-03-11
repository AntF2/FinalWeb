import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component'; 
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ProductoComponent } from './components/producto/producto.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/tabla/:categoria', component: TablaProductosComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'productos/tabla/:categoria/:id', component: ProductoComponent }



];