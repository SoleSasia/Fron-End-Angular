import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

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
  
  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    /*//TODO: revisar e implementar obtenerDatos
    this.portfolioServ.obtenerDatos().subscribe(data => {
      this.listaEdu = data.educacion;
    })*/

      this.listarEducaciones();
  }

  listarEducaciones(): void{
    this.portfolioServ.listarEducaciones().subscribe(data => {this.listaEdu = data})
  }

  abrirModal(){
    let edu = {id:0,tituloEdu:"",periodoEdu:"",institucionEdu:"",descripcionEdu:"",urlLogoEdu:""};
    this.educacion = edu;
    this.tituloModal = "Agregar elemento a Educación";
    this.agregarEditarActivado = true;
  }

  procesarAgregar(nuevaEdu:Educacion){
    this.portfolioServ.agregarEdu(nuevaEdu).subscribe(data => {
      alert("Educación agregada con éxito");
      this.listarEducaciones();
      }, error =>{
        alert("Ha ocurrido un error");
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
    this.portfolioServ.editarEdu(idEduEditada, eduEditada).subscribe(data => {
      alert("Educación editada con éxito");
      this.listarEducaciones();
      }, error =>{
        alert("Ha ocurrido un error");
      }
    );
    this.cerrarModal();
  }

  eliminarClick(eduId:any){
    if(eduId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarEdu(eduId).subscribe(data => {
        alert("Educación eliminada con éxito");
        this.listarEducaciones();
        });
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.listarEducaciones();
  }

}


