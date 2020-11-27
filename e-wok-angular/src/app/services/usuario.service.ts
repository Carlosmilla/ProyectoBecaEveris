import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../dto/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://localhost:8085/proyecto/editarUsuario?id=';

  constructor(private http: HttpClient) { }

  editarUsuario(user: User) {
    const url = this.baseUrl + user.id;
     return this.http.put<User>(url, user);
  }

  getId() {
    return localStorage.getItem('id');
  }

  
  guardarId(id: number) {
    localStorage.setItem('id', id.toString());
  }

}
