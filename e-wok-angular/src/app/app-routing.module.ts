import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibroSolicitadoComponent } from './libro-solicitado/libro-solicitado.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilEditadoComponent } from './perfil-editado/perfil-editado.component';
import { PerfilEditarComponent } from './perfil-editar/perfil-editar.component';
import { PerfilInicioComponent } from './perfil-inicio/perfil-inicio.component';
import { PerfilMisLibrosComponent } from './perfil-mis-libros/perfil-mis-libros.component';
import { PerfilPenalizacionesComponent } from './perfil-penalizaciones/perfil-penalizaciones.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },

  { 
    path: 'login', 
    component: LoginComponent 
  },

  { 
    path: 'menu', 
    component: MenuComponent,
    children:[
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'detalle/:id',
        component: DetalleLibroComponent
      }, 
      {
        path: 'busqueda',
        component: BusquedaComponent
      },
      {
        path: 'libro/:id',
        component: LibroSolicitadoComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'perfil-inicio'
          },
          {
            path: 'perfil-inicio',
            component: PerfilInicioComponent
          },
          {
            path: 'mis-libros',
            component: PerfilMisLibrosComponent
          },
          {
            path: 'penalizaciones',
            component: PerfilPenalizacionesComponent
          },
          {
            path: 'editar',
            component: PerfilEditarComponent,
            children: [
              {
                path: 'editado',
                component: PerfilEditadoComponent
              },
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
