import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginObject } from '../dto/LoginObject';
import { Session, User } from '../dto/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new LoginObject();
  sesion: Session = new Session();
  usuario = new User();

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    console.log(this.login);
    this.loginService.login(this.login).subscribe(
      (respuesta) => {
        this.sesion = respuesta;
        console.log(respuesta);
        this.loginService.setSession(this.sesion); 
        this.router.navigate(['/menu/inicio']);        
      }, (error) => {
        console.log(error);
      }
    );

  }

}
