import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.scss']
})
export class PerfilEditarComponent implements OnInit {

  usuario: User;
  id: number;

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  editarUsuario() {
    this.usuario.id = parseInt(this.userService.getId());
    this.userService.editarUsuario(this.usuario).subscribe(
      (res) => {
        this.usuario = res;
        console.log(this.usuario)
      }, (error) => {
        console.log(error);
      }
    )
  }

}
