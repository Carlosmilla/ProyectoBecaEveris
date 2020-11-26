import { Component, OnInit } from '@angular/core';
import { Libro } from '../dto/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  libroL = new Libro();
  constructor(private libroService: LibrosService) { }

  ngOnInit(): void {
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

}
