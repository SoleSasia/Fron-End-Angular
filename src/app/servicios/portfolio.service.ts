import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    //console.log("El servicio está siendo inyectado");
    return this.http.get<any>('./assets/data/data.json');
    
  }
}
