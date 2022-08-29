import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EduDTO } from 'src/app/dto/eduDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  
  //TODO: resolver login
  @Input() isAdmin: boolean = true;
  
  @Input() idPerso : number;
  @Input() listaEdu: EduDTO[] = [];
  //recarga vista portfolio
  @Output() recargandoPortfolio = new EventEmitter<any>();

  educacion: EduDTO;
  
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;

  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    
  }
//recarga solo esta seccion
  listarEducaciones() {
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaEdu = data.educaciones})
  }

  abrirModalAgregar(){
    
    let edu = {id:0,personaId:this.idPerso, tituloEdu:"",periodoEdu:"",institucionEdu:"",descripcionEdu:"",urlLogoEdu:""};
    this.educacion = edu;
    this.tituloModal = "Agregar elemento a Educación";
    this.agregarEditarActivado = true;
  }

  abrirModalEditar(edu: EduDTO){
    //control
    console.log("objeto en el modal: idPersona => " + edu.personaId + "; idEdu: " + edu.id);
    this.educacion = edu;
    this.tituloModal = "Editar elemento en Educación";
    this.agregarEditarActivado = true;
  }

  eliminarEdu(eduId:any){
    if(eduId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarEdu(eduId).subscribe(data => {
        alert("Educación eliminada con éxito");
        this.recargandoPortfolio.emit();
        });
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.recargandoPortfolio.emit();
  }

}


