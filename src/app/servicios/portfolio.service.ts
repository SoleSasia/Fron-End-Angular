import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduDTO } from '../dto/eduDTO';
import { Experiencia } from '../dto/experiencia';
import { HabBlanda } from '../dto/habBlanda';
import { HabTecnicaDTO } from '../dto/habTecnicaDTO';
import { PersoDTO } from '../dto/persoDTO';
import { Proyecto } from '../dto/proyecto';
import { RespuestaDTO } from '../dto/respuestaDTO';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  //DATA JSON
  //urlBackend: string = "src/assets/data/data.json";

  //esta url sale del @RequestMapping del Controller del backend "http://localhost:8080/"
  urlBackend: string = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  // LM Porfolio //

  public obtenerDatos():Observable<any>{
    return this.http.get<any>(this.urlBackend + 'portfolio');
  }

  public editarPersona(perso: PersoDTO) : Observable<RespuestaDTO>{
    return this.http.put<RespuestaDTO>(this.urlBackend + 'editarPersona', perso);
  }
  
  // ABM Educacion //

  public agregarEdu(edu:EduDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaEdu', edu);    
  }

  public editarEdu(id :number, edu :EduDTO): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarEdu/${id}`, edu);
  }

  public borrarEdu(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarEdu/${id}`);
  }

  // ABM Experiencia //

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

  public agregarHabTecnica(habTec: HabTecnicaDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaHabTecnica', habTec);    
  }

  public editarHabTecnica(id: number, habTec :HabTecnicaDTO): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarHabTecnica/${id}`, habTec);
  }

  public borrarHabTecnica(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabTecnica/${id}`);
  }

  // ABM Habilidad Blanda //

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
