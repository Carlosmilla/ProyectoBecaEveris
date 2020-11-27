import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  baseUrl = 'http://localhost:8085/proyecto/';
  constructor(private http: HttpClient) { }

  getLibros(): Observable<any>{
    return this.http.get(this.baseUrl+'verLibros');
  }

  getLibroById(id: number): Observable<any>{
    return this.http.get(this.baseUrl+'/buscarLibroPorId?id='+id);
  }

  getLibroByName(name: String): Observable<any>{
     return this.http.get(this.baseUrl+'buscarLibroPorTitulo?titulo='+name+'');
  }
}
