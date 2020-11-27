import { Component, OnInit } from '@angular/core';
import { Libro } from '../dto/libro';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-perfil-mis-libros',
  templateUrl: './perfil-mis-libros.component.html',
  styleUrls: ['./perfil-mis-libros.component.scss']
})
export class PerfilMisLibrosComponent implements OnInit {

  libroL = new Libro();
  usuario;
  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.listLibro();
  }

  listLibro(){
    this.pedidoService.getPedidosByUserId(this.usuario.id).subscribe(
      (respuesta) => {
        this.libroL = respuesta;
        console.log(this.libroL);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
