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
<<<<<<< HEAD
  //usuarioActualSubject: BehaviorSubject<any>;
   
  //opcion 2
  //isLogged: boolean = false;
=======
  usuarioActualSubject: BehaviorSubject<any>;
   
  //opcion 2
  isLogged: boolean = false;
>>>>>>> 515170ab373c6747d5dabfb3278303f7dc52638e

  /*
  //opciones Sole
  credencial: any = {username: "admin", password: "admin"};
  resp: RespuestaDTO = {salioBien: false, msj: ""};
  */

  constructor(private http:HttpClient) { 
<<<<<<< HEAD
    //this.usuarioActualSubject = new BehaviorSubject<any>(sessionStorage.getItem("usuarioActual"));
=======
    this.usuarioActualSubject = new BehaviorSubject<any>(sessionStorage.getItem("usuarioActual"));
>>>>>>> 515170ab373c6747d5dabfb3278303f7dc52638e
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
<<<<<<< HEAD
    //this.isLogged = true;
    window.sessionStorage.setItem(TOKEN_KEY, "solecita");
  }
/*
=======
    this.isLogged = true;
    sessionStorage.setItem("usuarioActual", "solecita");
  }

>>>>>>> 515170ab373c6747d5dabfb3278303f7dc52638e
  verificarisLogged(): boolean {
    if(this.isLogged){
      return true;
    } else {
      return false;
    }
    
  }
<<<<<<< HEAD
*/
  cerrarSesion(): void {
    //this.isLogged = false;
    window.sessionStorage.clear();
  }

  
  getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
=======

  cerrarSesion(): void {
    this.isLogged = false;
    sessionStorage.removeItem("usuarioActual");
>>>>>>> 515170ab373c6747d5dabfb3278303f7dc52638e
  }



}

