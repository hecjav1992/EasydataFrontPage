import { RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Inicio1Component } from './inicio1/inicio1.component';
import { LoginComponent } from './login/login.component';
import { DasboardseguiComponent } from './dasboardsegui/dasboardsegui.component';
import { SeguimientoescolarComponent } from './seguimientoescolar/seguimientoescolar.component';
import { EscolarComponent } from './escolar/escolar.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import {VentasComponent}from './ventas/ventas.component'

const appRoutes = [
  { path: '', component: Inicio1Component },
  { path: 'Inicio', component: Inicio1Component },
  { path: 'Servicios', component: CuerpoComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'paneladministracion', component: DasboardseguiComponent },
  { path: 'panelescolar', component: SeguimientoescolarComponent },
  { path: 'escolar', component: EscolarComponent },
  { path: 'capacitacion', component: CapacitacionComponent },
  {path:'TecnologiaArticulos',component: VentasComponent}



];
export const routing = RouterModule.forRoot(appRoutes);