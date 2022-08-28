import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/dto/proyecto';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-editar-proyectos',
  templateUrl: './agregar-editar-proyectos.component.html',
  styleUrls: ['./agregar-editar-proyectos.component.css']
})

export class AgregarEditarProyectosComponent implements OnInit {

  @Input() proyecto: Proyecto;
  @Output() cerrandoModal = new EventEmitter<any>();

  proye : Proyecto;
  //respuesta que viene del Backend
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.proye = this.proyecto;
  }

  agregarProye(nuevoProye:Proyecto){
    if (nuevoProye.nombreProye != ""){
      this.mostrarMsj = true;
      this.portfolioServ.agregarProyecto(nuevoProye).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede agregar un elemento sin título";
    }
  }

  editarProye(proyeEditado:Proyecto){
    if (proyeEditado.nombreProye != ""){
      this.mostrarMsj = true;
      let idProyeEditado: any = proyeEditado.id;
      this.portfolioServ.editarProyecto(idProyeEditado, proyeEditado).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede modificar un elemento sin título";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista de esta seccion del portfolio
    this.cerrandoModal.emit();
  }

}
