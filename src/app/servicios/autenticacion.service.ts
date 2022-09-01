import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { RespuestaDTO } from '../dto/respuestaDTO';

//ZK
const TOKEN_KEY : string = "auth";


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  //url: string = "../../../src/assets/data/data.json";
  //usuarioActualSubject: BehaviorSubject<any>;
   
  //opcion 2
  //isLogged: boolean = false;

  /*
  //opciones Sole
  credencial: any = {username: "admin", password: "admin"};
  resp: RespuestaDTO = {salioBien: false, msj: ""};
  */

  constructor(private http:HttpClient) { 
    //this.usuarioActualSubject = new BehaviorSubject<any>(sessionStorage.getItem("usuarioActual"));
  }

  /*
  iniciarSesion(): Observable<any> {
    return this.http.get(this.url).pipe(map(data => {
      sessionStorage.setItem("usuarioActual", JSON.stringify(data));
      return data;
    }));
  }
  */
  iniciarSesion(): void {
    //this.isLogged = true;
    window.sessionStorage.setItem(TOKEN_KEY, "solecita");
  }
/*
  verificarisLogged(): boolean {
    if(this.isLogged){
      return true;
    } else {
      return false;
    }
    
  }
*/
  cerrarSesion(): void {
    //this.isLogged = false;
    window.sessionStorage.clear();
  }

  
  getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }



}

