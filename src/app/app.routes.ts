import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { loginGuard } from './guards/login.guard';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioRegistroComponent } from './components/registro/registro.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { CrudProductosComponent } from './pages/crud-productos/crud-productos.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'carrito', component: CarritoComprasComponent},
  { path: 'producto/:categoria/:id', component: ProductoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: FormularioRegistroComponent},
  { path: 'productos', component: ProductosComponent  },
  { path: 'productos/tabla/:categoria', component: TablaProductosComponent },
  { path: 'productos/tabla/:categoria/:id', component: ProductoComponent },
  { path: 'tabla-usuarios', component: TablaUsuariosComponent },//tiene que ir el guardian para admin COMPLETO FALTA ESTILOS
  { path: 'crudProductos', component: CrudProductosComponent} //tiene que ir el guardian para admin COMPLETO FALTA ESTILOS
];