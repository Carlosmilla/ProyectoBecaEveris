import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../dto/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  baseUrl = 'http://localhost:8085/proyecto/';

  constructor(private http: HttpClient) { }

  addPedido(pedido: Pedido): Observable<any>{ 
    return this.http.post(this.baseUrl+'agregarPedido', pedido);

  }

  getPedidoById(idP: number): Observable<any>{
    return this.http.get(this.baseUrl+'buscarPedidoPorId?id='+idP);
  }

  getPedidosByUserId(idU: number): Observable<any>{
    return this.http.get(this.baseUrl+'buscarPedidosByUserId?Usuarioid='+idU);

  }

  deletePedidoById(idP: number): Observable<any>{
    return this.http.delete(this.baseUrl+'eliminarPedidoById?id='+idP);
  }

  setPedidoInShow(pedido: number){
    localStorage.setItem('pedido', pedido.toString());
  }

  getPedidoInShow(): boolean{
    return localStorage.getItem('pedido') != null
  }
}
