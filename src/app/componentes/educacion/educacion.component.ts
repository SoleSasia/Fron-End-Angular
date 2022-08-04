import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ServEduService } from 'src/app/servicios/serv-edu.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  
  urlEdu: string = "http://localhost:8080/"
//TO DO: resolver login
  isAdmin: boolean = true;
  
  listaEdu: Educacion[] = [];
  educacion: Educacion;
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  
  constructor(private eduServ:ServEduService) { }

  ngOnInit(): void {
      this.listarEducaciones();
  }

  abrirModal(){
    this.educacion = {id:0,tituloEdu:"",periodoEdu:"",nombreInstituEdu:"",descripcionEdu:"",urlLogoEdu:""};
    this.tituloModal = "Agregar elemento a Educación";
    this.agregarEditarActivado = true;
  }

  procesarAgregar(nuevaEdu:Educacion){
    this.eduServ.agregarEdu(nuevaEdu).subscribe(data => {
      alert("Educación agregada correctamente");
      this.listaEdu = data;
      this.listarEducaciones();
      }, error =>{
        alert("No se a cargado el elemento");
      }
    )
  }

  editarClick(edu: Educacion){
    this.educacion=edu;
    this.tituloModal = "Editar elemento en Educación";
    this.agregarEditarActivado = true;
  }

  procesarEditar(eduEditada:Educacion){

    let idEduEditada: any = eduEditada.id;
    this.eduServ.actualizarEdu(idEduEditada, eduEditada).subscribe(data => {
      alert("Educación modificada correctamente");
      this.listaEdu = data;
      this.listarEducaciones();
      }, error =>{
        alert("No se a cargado el elemento");
      }
    )
  }

  eliminarClick(eduId:any){
    if(eduId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.eduServ.borrarEdu(eduId).subscribe(data => {
        alert("Educación eliminada correctamente");
        this.listarEducaciones();
        }, error => { 
        alert("No se pudo eliminar el elemento");
        })
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.listarEducaciones();
  }

  listarEducaciones(): void{
    this.eduServ.verEducaciones().subscribe(data => {this.listaEdu = data})
  }
 
}


/*

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
      )
    }
  
  }
  */


