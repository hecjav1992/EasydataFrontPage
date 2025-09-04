import { Component, EventEmitter, Output,OnInit, Input} from '@angular/core';
import { SharedService } from '../services/servicio-compartido';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent   {

  public estado:any;

  constructor(public comunicacion:SharedService){
  
  }
 
greetStudent(){

  if(this.recivirparametro()=="activo"){
  this.comunicacion.sedmessage("desactivo");
  }
  else
    this.comunicacion.sedmessage("activo");
  
}

recivirparametro(){
  this.comunicacion.teachermesage$.subscribe(
    message=>{
     this.estado=message;

    }

  )
return this.estado
}

  
}
