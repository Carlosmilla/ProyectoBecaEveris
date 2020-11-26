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
    this.loginService.login(this.login).subscribe(
      (respuesta) => {
        this.sesion = respuesta;
        this.loginService.setUserInSession(this.sesion.user);
        this.router.navigate(['/menu/inicio']);        
      }, (error) => {
        console.log(error);
      }
    );

  }

}
