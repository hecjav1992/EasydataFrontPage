import { Component, DoCheck, OnInit } from '@angular/core';
import { SharedService } from '../services/servicio-compartido';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-inicio',
  template: '',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, DoCheck {

  public variable: any = "desactivo";
  constructor(public comunicacion: SharedService, private router: Router, private url: LocationStrategy) {

  }
  ngDoCheck(): void {

    if (this.url.path() == "/Login") {

      this.variable = "desactivo"

    }

    if (this.url.path() == "/paneladministracion" && this.variable==="desactivo") {

      this.router.navigate(['/'])

    }


  }

  ngOnInit(): void {
    this.comunicacion.teachermesage$.subscribe(
      message => {
        this.variable = message;

      }

    )

    this.router.navigate(['/'])

  }




}


















