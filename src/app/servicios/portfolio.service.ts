import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../dto/educacion';
import { Experiencia } from '../dto/experiencia';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  //esta url sale del @RequestMapping del Controller del backend "http://localhost:8080/"
  urlBackend:string = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    //console.log("El servicio está siendo inyectado");
    //return this.http.get<any>('./assets/data/data.json');
    return this.http.get<any>(this.urlBackend);
  }
  
// ABM Educacion //

  //TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlBackend + 'listaEdu')
  };

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

  //TODO: borrar e integrar a obtenerDatos (en el backend)
  public listarExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlBackend + 'listaExpe')
  };

  public agregarExpe(expe:Experiencia): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaExpe', expe);    
  }

    public editarExpe(id :number, expe :Experiencia): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarExpe/${id}`, expe);
  }

  public borrarExpe(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarExpe/${id}`);
  }
}
