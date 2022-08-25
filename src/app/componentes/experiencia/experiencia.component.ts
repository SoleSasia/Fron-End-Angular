import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/dto/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //urlBackend: string = "http://localhost:8080/"
  
  //TODO: resolver login
  isAdmin: boolean = true;
  
  @Input() listaExpe: Experiencia[] = [];//revisar y crear dto portfolio
  experiencia: Experiencia;
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;

 
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    console.log("llegando datos a expe desde miPortfolio")
    //this.listarExperiencias();
  }

  listarExperiencias() : void{
    console.log("llegando data de experiencia");
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaExpe = data.experiencias});
    //this.portfolioServ.listarExperiencias().subscribe(data => {this.listaExpe = data})
  }

  abrirModal(){
    let expe = {id:0,puestoExpe:"",periodoExpe:"",organismoExpe:"",descripcionExpe:"",urlLogoExpe:""};
    this.experiencia = expe;
    this.tituloModal = "Agregar elemento a Experiencia";
    this.agregarEditarActivado = true;
  }

  procesarAgregar(nuevaExpe:any){
    this.portfolioServ.agregarExpe(nuevaExpe).subscribe(data => {
      alert("Experiencia agregada correctamente");
      this.listaExpe = data;
      this.listarExperiencias();
      }, error =>{
        alert("No se a cargado el elemento");
      }
    );
    this.cerrarModal();
  }

  editarClick(expe: Experiencia){
    this.experiencia = expe;
    this.tituloModal = "Editar elemento en Experiencia";
    this.agregarEditarActivado = true;
  }

  procesarEditar(expeEditada:any){

    let idExpeEditada: any = expeEditada.id;
    this.portfolioServ.editarExpe(idExpeEditada, expeEditada).subscribe(data => {
      alert("Experiencia modificada correctamente");
      this.listaExpe = data;
      this.listarExperiencias();
      }, error =>{
        alert("No se a cargado el elemento");
      }
    );
    this.cerrarModal();
  }

  eliminarClick(expeId:any){
    if(expeId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarExpe(expeId).subscribe(data => {
        alert("Experiencia eliminada correctamente");
        this.listarExperiencias();
        }, error => { 
        alert("No se pudo eliminar el elemento");
        })
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.listarExperiencias();
  }




   /*
  //VARIABLES DEL MODELO
  experiencia:any = [
    {
      nombreOrganismo: "A Pedal", 
      fechaInicio: "setiembre 2020", 
      fechaFin: "actualidad",
      puesto: "fundadora",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et porro totam sunt pariatur animi sit ullam, unde sapiente voluptate rerum illum placeat fugiat aliquam, voluptatibus nostrum inventore fugit. Nihil.",
      urlLogo: ""
    },

    {
      nombreOrganismo: "Centro Vipassana", 
      fechaInicio: "agosto 2019", 
      fechaFin: "agosto 2020",
      puesto: "manager",
      descripcion: "sin palabras...",
      url_logo: ""
    },
  ];
  */
}
