import { Component, Input, OnInit } from '@angular/core';
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
  
  @Input() listaEdu: Educacion[] = [];
  @Input() IdPerso : number;
  educacion: Educacion;
  
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
  }

  listarEducaciones() {
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaEdu = data.educaciones})
  }

  abrirModalAgregar(){
    
    let edu = {id:0,tituloEdu:"",periodoEdu:"",institucionEdu:"",descripcionEdu:"",urlLogoEdu:"", personaId:this.IdPerso};
    this.educacion = edu;
    this.tituloModal = "Agregar elemento a Educación";
    this.agregarEditarActivado = true;
  }

  abrirModalEditar(edu: Educacion){
    this.educacion = edu;
    this.tituloModal = "Editar elemento en Educación";
    this.agregarEditarActivado = true;
  }

  eliminarEdu(eduId:any){
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


