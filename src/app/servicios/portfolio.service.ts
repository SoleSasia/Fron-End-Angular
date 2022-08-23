import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../dto/educacion';
import { Experiencia } from '../dto/experiencia';
import { HabBlanda } from '../dto/habBlanda';
import { HabTecnica } from '../dto/habTecnica';
import { Proyecto } from '../dto/proyecto';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  //DATA JSON
  //urlBackend: string = "src/assets/data/data.json";

  //esta url sale del @RequestMapping del Controller del backend "http://localhost:8080/"
  urlBackend: string = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<any>{
    //console.log("El servicio obtener datos está siendo inyectado");
    //return this.http.get<any>('./assets/data/data.json');
    return this.http.get<any>(this.urlBackend + 'portfolio');
  }
  
 // ABM Educacion //

  /*TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlBackend + 'listaEdu')
  }*/

  public agregarEdu(edu:Educacion): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaEdu', edu);    
  }

  public editarEdu(id :number, edu :Educacion): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarEdu/${id}`, edu);
  }

  public borrarEdu(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarEdu/${id}`);
  }

  /* TODO: verificar si es necesario
  public buscarEdu(id :number): Observable<any> {
    return this.http.get<any>(this.urlEdu + 'ver/${id}');
  }
  */

 // ABM Experiencia //

  /*TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlBackend + 'listaExpe')
  }*/

  public agregarExpe(expe:Experiencia): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaExpe', expe);    
  }

  public editarExpe(id :number, expe :Experiencia): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarExpe/${id}`, expe);
  }

  public borrarExpe(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarExpe/${id}`);
  }

 // ABM Habilidad Tecnica //

  /*TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarHabTecnicas(): Observable<HabTecnica[]>{
    return this.http.get<HabTecnica[]>(this.urlBackend + 'listaHabTecnicas')
  }*/

  public agregarHabTecnica(habTec: HabTecnica): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaHabTecnica', habTec);    
  }

  public editarHabTecnica(id: number, habTec :HabTecnica): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarHabTecnica/${id}`, habTec);
  }

  public borrarHabTecnica(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabTecnica/${id}`);
  }

  // ABM Habilidad Blanda //

  /*TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarHabBlandas(): Observable<HabBlanda[]>{
    return this.http.get<HabBlanda[]>(this.urlBackend + 'listaHabBlandas')
  }*/

  public agregarHabBlanda(habBlan: HabBlanda): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaHabBlanda', habBlan);    
  }

  public editarHabBlanda(id: number, habBlan :HabBlanda): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarHabBlanda/${id}`, habBlan);
  }

  public borrarHabBlanda(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabBlanda/${id}`);
  }

  // ABM Proyecto //

  /*TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlBackend + 'listaProyectos');
  }*/

  public agregarProyecto(proye:Proyecto): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevoProyecto', proye);    
  }

  public editarProyecto(id :number, proye :Proyecto): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarProyecto/${id}`, proye);
  }

  public borrarProyecto(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarProyecto/${id}`);
  }

}
