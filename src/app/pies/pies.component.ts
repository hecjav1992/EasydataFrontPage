import { Component, OnInit } from '@angular/core';
import { easydata } from '../entidades/propiedades';

@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css']
})
export class PiesComponent implements OnInit {
   public titulo:String;
   public year:String;
  constructor() { 
     this.titulo=easydata.nombre;
     this.year=easydata.año;
  }

  ngOnInit(): void {
  }

}
