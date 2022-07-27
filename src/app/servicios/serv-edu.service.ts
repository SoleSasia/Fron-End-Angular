import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class ServEduService {

  urlEdu:string = "http://localhost:8080/educacion/"

  constructor(private http:HttpClient) { }

  public verEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlEdu + 'ver/educaciones')
  };

}
