import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importo mis componentes
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component'
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component'
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component'
import { ProyectosComponent } from './componentes/proyectos/proyectos.component'
import { ContactoComponent } from './componentes/contacto/contacto.component'
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

//defino mis rutas
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'ingresar', component: LoginComponent},
  {path: '', redirectTo:'inicio', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
