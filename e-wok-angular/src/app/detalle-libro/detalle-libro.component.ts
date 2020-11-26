import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../dto/libro';
import { Pedido } from '../dto/pedido';
import { LibrosService } from '../services/libros.service';
import { PedidosService } from '../services/pedidos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.scss'],
  providers: [DatePipe]
})
export class DetalleLibroComponent implements OnInit {

  libro= new Libro();
  pedido = new Pedido();
  idL:number;
  aux: number;
  fechaD: string;
  diaD: number;
  mesD: number;
  yearD: number;
  sub;
  usuario;
  fecha = new Date();

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private libroService: LibrosService, private pedidoService: PedidosService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       this.idL = parseInt(params.get('id')); 
       console.log(this.idL);   
   });
   this.libroService.getLibroById(this.idL).subscribe(
    (respuesta) => {
      this.libro = respuesta;
      console.log(this.libro);
    }, (error) => {
      console.log(error);
    }
  );
  }

  hacerPedido(){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.pedido.libroId = this.idL;
    this.pedido.usuarioId = this.usuario.id;
    this.pedido.fechaSolicitud = this.datePipe.transform(this.fecha, 'dd-MM-yyyy');
    this.diaD = this.fecha.getDay();
    this.mesD = this.fecha.getMonth()+2;
    this.yearD = this.fecha.getFullYear();
    this.fechaD= "0"+this.diaD.toString()+"-"+this.mesD.toString()+"-"+this.yearD.toString();
    this.pedido.fechaDevolucion= this.fechaD;
    this.pedido.penalizacion ="N";

    this.pedidoService.addPedido(this.pedido).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },(error) =>{
        console.log(error);
      }
    )

  }

}
