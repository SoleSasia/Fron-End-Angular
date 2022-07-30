import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class ServEduService {

  //esta url sale del @RequestMapping del EduController del backend "http://localhost:8080/educacion"
  urlEdu:string = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  public verEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlEdu + 'ver')
  };

  public agregarEdu(edu:Educacion): Observable<any> {
    return this.http.post<any>(this.urlEdu + 'nueva', edu);    
  }

  public borrarEdu(id :number): Observable<any> {
    return this.http.delete<any>(this.urlEdu + 'borrar/${id}');
  }

  public actualizarEdu(id :number, edu :Educacion): Observable<any> {
    return this.http.put<any>(this.urlEdu + 'actualizar/${id}', edu);
  }

}
