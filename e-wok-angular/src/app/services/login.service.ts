import { Injectable } from '@angular/core';
import { LoginObject } from '../dto/loginObject';
import {Session, User} from '../dto/User';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(private http: HttpClient) { }

  login(login: LoginObject): Observable<any>{
    //return this.http.post('http://localhost:8000/login', login);
    return this.http.post('http://localhost:8085/proyecto/login', login);
  }

  setSession(session: Session){
    localStorage.setItem('token', session.token);
    /*this.setUserInSession(session.user);*/
  }

  isActiveSesion(): boolean{
    return localStorage.getItem('token') != null
  }

  setUserInSession(user: User){
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  LogOut(){
    localStorage.clear();
  }
}
