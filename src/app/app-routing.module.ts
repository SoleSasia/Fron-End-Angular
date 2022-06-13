import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importo mis componentes
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component'
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component'
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component'
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component'
import { ProyectosComponent } from './componentes/proyectos/proyectos.component'
import { ContactoComponent } from './componentes/contacto/contacto.component'

//defino mis rutas
const routes: Routes = [
  {path: 'inicio', component: EncabezadoComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'experiencia-y-educacion', component: ExperienciaYEducacionComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
