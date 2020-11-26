import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.scss']
})
export class PerfilEditarComponent implements OnInit {
  usuario: User;
  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

}
