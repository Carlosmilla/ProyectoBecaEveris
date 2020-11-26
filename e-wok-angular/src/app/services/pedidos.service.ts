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

  getPedidoById(idL: number, idU: number): Observable<any>{
    return this.http.get(this.baseUrl+'buscarPedidos?idl='+idL+'&idU='+idU);
  }
}
