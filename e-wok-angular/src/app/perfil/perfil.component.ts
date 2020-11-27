import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario: User;
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  rescatarId(id: number) {
    this.userService.guardarId(id);
  }
}
