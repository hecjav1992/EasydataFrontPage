import { Component, OnInit } from '@angular/core';
import {eslogan} from '../entidades/propiedades'

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  public titulo:String;
  constructor() {
    this.titulo=eslogan.valor;

   }

  ngOnInit(): void {
  }

}
