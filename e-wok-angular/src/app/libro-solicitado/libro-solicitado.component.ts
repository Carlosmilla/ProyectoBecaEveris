import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../services/pedidos.service';
import { LibrosService } from '../services/libros.service';
import { Pedido } from '../dto/pedido';
import { Libro } from '../dto/libro';
import { User } from '../dto/User';

@Component({
  selector: 'app-libro-solicitado',
  templateUrl: './libro-solicitado.component.html',
  styleUrls: ['./libro-solicitado.component.scss'],
})
export class LibroSolicitadoComponent implements OnInit {
  sub;
  idL: number;
  idP: number;
  pedido = new Pedido();
  usuario = new User();
  libro = new Libro();
  constructor(
    private _Activatedroute: ActivatedRoute,
    private router: Router,
    private libroService: LibrosService,
    private pedidoService: PedidosService
  ) {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.idL = parseInt(params.get('id'));
      console.log(this.idL);
    });

    this.libroService.getLibroById(this.idL).subscribe(
      (respuesta) => {
        this.libro = respuesta;
        console.log(this.libro);
      },
      (error) => {
        console.log(error);
      }
    );

    this.idP = parseInt(localStorage.getItem('pedido'));
    this.pedidoService.getPedidoById(this.idP).subscribe(
      (respuesta) => {
        this.pedido = respuesta;
        console.log(this.pedido);
      },
      (error) => {
        console.log(error);
      }
    );   
  }

  eliminarPedido(){
    this.pedidoService.deletePedidoById(this.pedido.id).subscribe(
      (respuesta) => {
        this.pedido = respuesta;
        console.log(this.pedido);
        this.router.navigate(['/menu/detalle', this.idL]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
