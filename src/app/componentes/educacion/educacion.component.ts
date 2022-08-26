import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  
  //TODO: resolver login
  isAdmin: boolean = true;
  
  @Input() listaEdu: Educacion[] = [];

  educacion: Educacion;
  
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
   
    //this.listarEducaciones();
  }

  listarEducaciones() {
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaEdu = data.educaciones})
  }

  abrirModal(){
    let edu = {id:0,tituloEdu:"",periodoEdu:"",institucionEdu:"",descripcionEdu:"",urlLogoEdu:""};
    this.educacion = edu;
    this.tituloModal = "Agregar elemento a Educación";
    this.agregarEditarActivado = true;
  }

  editarClick(edu: Educacion){
    this.educacion = edu;
    this.tituloModal = "Editar elemento en Educación";
    this.agregarEditarActivado = true;
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


