import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { BarramenuComponent } from './barramenu/barramenu.component';
import { routing } from './routing';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { VideoComponent } from './video/video.component';
import { PiesComponent } from './pies/pies.component';
import { Inicio1Component } from './inicio1/inicio1.component';
import { LoginComponent } from './login/login.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedService } from './services/servicio-compartido';
import { DasboardseguiComponent } from './dasboardsegui/dasboardsegui.component';
import { SeguimientoescolarComponent } from './seguimientoescolar/seguimientoescolar.component';
import { EscolarComponent } from './escolar/escolar.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabezaComponent,
    BarramenuComponent,
    CuerpoComponent,
    VideoComponent,
    PiesComponent,
    Inicio1Component,
    LoginComponent,
    Pantalla1Component,
    DashboardComponent,
    DasboardseguiComponent,
    SeguimientoescolarComponent,
    EscolarComponent,
    CapacitacionComponent,
    VentasComponent,
    NuevoComponent,
  ],
  imports: [    
    BrowserModule,
    routing,
    HttpClientModule
  
  ],
  providers: [SharedService,
  {provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [InicioComponent]
})
export class AppModule { }
