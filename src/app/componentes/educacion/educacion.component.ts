import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';
import { ServEduService } from 'src/app/servicios/serv-edu.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  
  //TODO: resolver login
  isAdmin: boolean = true;
  
  listaEdu: Educacion[] = [];
  educacion: Educacion;
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  
  constructor(private eduServ:ServEduService) { }

  ngOnInit(): void {
      this.listarEducaciones();
  }

  listarEducaciones(): void{
    this.eduServ.listarEducaciones().subscribe(data => {this.listaEdu = data})
  }

  abrirModal(){
    let edu = {id:0,tituloEdu:"",periodoEdu:"",institucionEdu:"",descripcionEdu:"",urlLogoEdu:""};
    this.educacion = edu;
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
    );
    this.cerrarModal();
  }

  editarClick(edu: Educacion){
    this.educacion = edu;
    this.tituloModal = "Editar elemento en Educación";
    this.agregarEditarActivado = true;
  }

  procesarEditar(eduEditada:Educacion){

    let idEduEditada: any = eduEditada.id;
    this.eduServ.editarEdu(idEduEditada, eduEditada).subscribe(data => {
      alert("Educación modificada correctamente");
      this.listaEdu = data;
      this.listarEducaciones();
      }, error =>{
        alert("No se a cargado el elemento");
      }
    );
    this.cerrarModal();
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

}


