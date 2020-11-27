import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../dto/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  sub;
  nombreB: string;
  libro = new Libro();
  libroL = new Libro();

  constructor(private _Activatedroute:ActivatedRoute, private router:Router, private libroService: LibrosService) { }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       this.nombreB = params.get('nombre'); 
       console.log(this.nombreB);

   });

   this.libroService.getLibroByNombre(this.nombreB).subscribe(
    (respuesta) => {
      this.libroL = respuesta;
      console.log(this.libroL.titulo);
    }, (error) => {
      console.log(error);
    }
  );
  }

}
