import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { LibroSolicitadoComponent } from './libro-solicitado/libro-solicitado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilMisLibrosComponent } from './perfil-mis-libros/perfil-mis-libros.component';
import { PerfilPenalizacionesComponent } from './perfil-penalizaciones/perfil-penalizaciones.component';
import { PerfilEditarComponent } from './perfil-editar/perfil-editar.component';
import { PerfilInicioComponent } from './perfil-inicio/perfil-inicio.component';
import { PerfilEditadoComponent } from './perfil-editado/perfil-editado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    BusquedaComponent,
    DetalleLibroComponent,
    LibroSolicitadoComponent,
    PerfilComponent,
    PerfilMisLibrosComponent,
    PerfilPenalizacionesComponent,
    PerfilEditarComponent,
    PerfilInicioComponent,
    PerfilEditadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
