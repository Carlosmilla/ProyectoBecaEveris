import { Component, OnInit } from '@angular/core';
import { Libro } from '../dto/libro';
import { Observable } from 'rxjs';
import { User } from '../dto/User';
import { LibrosService } from '../services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  libroL = new Libro();
  name: String;
  usuario;
  constructor(private libroService: LibrosService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.listLibro();
  }

  listLibro(){
    this.libroService.getLibros().subscribe(
      (respuesta) => {
        this.libroL = respuesta;
        console.log(this.libroL);
      }, (error) => {
        console.log(error);
      }
    );
  }

  findLibroByName() {
    this.libroService.getLibroByName(this.name).subscribe(
      (respuesta) => {
        this.name = respuesta;
        this.router.navigate(['menu/detalle/']);
        console.log(this.name);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
