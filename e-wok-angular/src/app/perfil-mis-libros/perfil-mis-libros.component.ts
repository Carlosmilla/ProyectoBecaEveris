import { Component, OnInit } from '@angular/core';
import { Libro } from '../dto/libro';
import { Pedido } from '../dto/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-perfil-mis-libros',
  templateUrl: './perfil-mis-libros.component.html',
  styleUrls: ['./perfil-mis-libros.component.scss']
})
export class PerfilMisLibrosComponent implements OnInit {

  pedidosL = new Pedido();
  usuario;
  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.listLibro();
  }

  listLibro(){
    this.pedidoService.getPedidosByUserId(this.usuario.id).subscribe(
      (respuesta) => {
        this.pedidosL = respuesta;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
