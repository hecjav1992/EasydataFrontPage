import { LocationStrategy } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import {eslogan} from '../entidades/propiedades'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit,DoCheck {

  public titulo:String;
  public titulo2:String;
  public titulo3:String;
  public titulo4:String;
  public variable:any;
  constructor( private url: LocationStrategy) {
    this.titulo=eslogan.valor;
    this.titulo2=eslogan.valor2;
    this.titulo3=eslogan.valor3;
    this.titulo4=eslogan.valor4;

   }
  ngDoCheck(): void {

    if (this.url.path() == "/") {

      this.variable = "inicio"

    }
    if (this.url.path() == "/escolar") {

      this.variable = "escolar"

    }
    if (this.url.path() == "/Servicios" ) {

      this.variable = "tecnologia"

    }

    if (this.url.path() == "/TecnologiaArticulos") {

      this.variable = "Ventastecnologia2"

    }
    if (this.url.path() == "/Inicio") {

      this.variable = "inicio"

    }
    if (this.url.path() == "/capacitacion") {

      this.variable = "capacitacion"

    }
    
  }

  ngOnInit(): void {
    
    if (this.url.path() == "/inicio") {

      this.variable = "inicio"

    }
   
  }

}
