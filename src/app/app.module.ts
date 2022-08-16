import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AgregarEditarEduComponent } from './componentes/educacion/agregar-editar-edu/agregar-editar-edu.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    NavbarComponent,
    EducacionComponent,
    InicioComponent,
    AgregarEditarEduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
