import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  sub;
  idB: number;

  constructor(private _Activatedroute:ActivatedRoute, private router:Router, private libroService: LibrosService) { }

  ngOnInit(): void {
    /*this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       this.idB = parseInt(params.get('id')); 
       console.log(this.idL);   
   });*/
  }

}
