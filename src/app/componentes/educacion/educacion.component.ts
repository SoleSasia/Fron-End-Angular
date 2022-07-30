import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
//import { findIndex } from 'rxjs';
import { Educacion } from 'src/app/model/educacion';
import { ServEduService } from 'src/app/servicios/serv-edu.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  urlEdu: string = "http://localhost:8080/"

  listaEdu: Educacion[] = []; 
  
  //constructor(private datosPortfolio:PortfolioService) { }
  constructor(private eduServ:ServEduService) { }

  ngOnInit(): void {
    
    this.verEducaciones();

    /*this.datosPortfolio.obtenerDatos().subscribe(
      data => {this.listaEdu=data.educacion;
    });*/
    
  }

  verEducaciones(): void{
    this.eduServ.verEducaciones().subscribe(data => {this.listaEdu = data})
  }

  procesarAgregar(nuevaEdu:Educacion){
    this.eduServ.agregarEdu(nuevaEdu).subscribe(data => {
      alert("Educación agregada correctamente");
      this.listaEdu = data;
      this.verEducaciones();
      }, error =>{
        alert("No se a cargado el elemento");
      }
    )
  }

  //TO-DO:enviar elemento modificado a la base de datos
  procesarModificar(eduModificada:Educacion){
    //busco el índice en donde está el elemento modificado en el modal
    let idEduModificada = this.listaEdu.findIndex(n => n === eduModificada);
    //usando el índice elimino elemento viejo y coloco el nuevo
    this.listaEdu.splice(idEduModificada,1,eduModificada);
    //console.log(this.listaEdu);
  }

  //recibo id del elemento desde el modal eliminar-edu
  procesarEliminar(eduId?:number){
    //lo elimino del array
    //this.listaEdu.splice(eduId,1);
    if (eduId != undefined){
      this.eduServ.borrarEdu(eduId)
      /*subscribe(data => {
        this.verEducaciones();
        }, error => { 
        alert("No se pudo eliminar el elemento");
        }
      )*/
    }
  
  }
}
