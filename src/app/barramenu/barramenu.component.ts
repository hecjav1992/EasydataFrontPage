import { LocationStrategy } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { menus } from '../entidades/propiedades';

@Component({
  selector: 'app-barramenu',
  templateUrl: './barramenu.component.html',
  styleUrls: ['./barramenu.component.css']
})
export class BarramenuComponent implements OnInit {
   public snicio:string;
   public servicios:string;
   public equipo:string;
   public ubicacion:string;
   public escolar:string;
   public capacitaciones:string;
   public soporte:string;
   public ventas:String;
  

  constructor() { 
      this.snicio=menus.opcion1;
      this.servicios=menus.opcion2;
      this.equipo=menus.opcion3;
      this.ubicacion=menus.opcion4;
      this.escolar=menus.opcion5;
      this.capacitaciones=menus.opcion6;
      this.soporte=menus.opcion7;
      this.ventas=menus.opcion8;
      
 

  }


  ngOnInit(): void {
  }

}
