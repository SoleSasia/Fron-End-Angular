import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/dto/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  //TODO: resolver login
  isAdmin: boolean = true;
  
  listaProyectos: Proyecto[] = [];
  proyecto: Proyecto;

  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    console.log("llegando data a proyecto");
    this.listarProyectos();
  }

  listarProyectos() {
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaProyectos = data.proyectos})
  }

  abrirModal(){
    let proye = {id:0,nombreProye:"",descripcionProye:"",imgUrl:"",repoUrl:"",liveUrl:""};
    this.proyecto = proye;
    this.tituloModal = "Agregar elemento a Proyectos";
    this.agregarEditarActivado = true;
  }

  procesarAgregar(nuevoProye:Proyecto){
    this.portfolioServ.agregarProyecto(nuevoProye).subscribe(data => {
      alert("Proyecto agregado con éxito");
      this.listarProyectos();
      }, error =>{
        alert("Ha ocurrido un error");
      }
    );
    this.cerrarModal();
  }

  editarClick(proye: Proyecto){
    this.proyecto = proye;
    this.tituloModal = "Editar elemento en Proyecto";
    this.agregarEditarActivado = true;
  }

  procesarEditar(proyeEditado:Proyecto){

    let idProyeEditado: any = proyeEditado.id;
    this.portfolioServ.editarProyecto(idProyeEditado, proyeEditado).subscribe(data => {
      alert("Proyecto editado con éxito");
      this.listarProyectos();
      }, error =>{
        alert("Ha ocurrido un error");
      }
    );
    this.cerrarModal();
  }

  eliminarClick(proyeId:any){
    if(proyeId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarProyecto(proyeId).subscribe(data => {
        alert("Proyecto eliminado con éxito");
        this.listarProyectos();
        });
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.listarProyectos();
  }

}
