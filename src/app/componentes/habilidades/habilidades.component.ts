import { Component, Input, OnInit } from '@angular/core';
import { HabBlanda } from 'src/app/dto/habBlanda';
import { HabTecnicaDTO } from 'src/app/dto/habTecnicaDTO';
import { NivelHabilidad } from 'src/app/dto/nivelHabilidad';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  //TODO: resolver login
  isLogged: boolean = true;
  
  @Input() idPerso : number;
  @Input() listaHabTecnica: HabTecnicaDTO[] = [];
  habTecnica: HabTecnicaDTO;

  //TODO: armar NIvelDTO
  listaNiveles: NivelHabilidad[] = [
    /*{ id : 1, nombreNivel : "Avanzado", style : "width: 75%" },
    { id : 2, nombreNivel : "Intermedio", style : "width: 50%" },
    { id : 3, nombreNivel : "Básico", style : "width: 25%" }*/
  ];

  @Input() listaHabBlanda: HabBlanda[] = [];
  //TODO: armar HabBlandaDTO
  habBlanda: HabBlanda;

  tituloModal: string = "";
  //variable para mostrar el modal
  agregarEditarActivado: boolean = false;
  //variable para mostrar contenido del modal segun tipo de habilidad
  esHabTecnica: boolean = false;
  esHabBlanda: boolean =false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
  }
  
  listarHabTecnicas(){
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaHabTecnica = data.habilidadesTecnicas})
  }
  
  listarHabBlandas(){
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaHabBlanda = data.habilidadesBlandas})
  }

  abrirModalAgregar() : void {
    if (this.esHabBlanda){
      let habBlan = {id:0,nombreHabilidad:"",urlIcono:""};
      this.habBlanda = habBlan;
      this.tituloModal = "Agregar elemento a Habilidades Blandas";
      this.agregarEditarActivado = true; 
    } else if (this.esHabTecnica){
      let habTec = {id:0,personaId:this.idPerso,nivelId:0, nombreHabilidad:"",urlIcono:""};
      this.habTecnica = habTec;
      this.tituloModal = "Agregar elemento a Habilidades Técnicas";
      this.agregarEditarActivado = true;
    }
  }

  procesarAgregarTecnica(nuevaHabTecnica:HabTecnicaDTO) : void { 
    this.portfolioServ.agregarHabTecnica(nuevaHabTecnica).subscribe(data => {alert("Habilidad agregada con éxito");
    this.listarHabTecnicas();
    }, error =>{alert("Ha ocurrido un error");
    })
    this.cerrarModal();
  } 

  procesarAgregarBlanda(nuevaHabBlanda:HabBlanda) : void {

    this.portfolioServ.agregarHabBlanda(nuevaHabBlanda).subscribe(data => {alert("Habilidad agregada con éxito");
    this.listarHabBlandas();
    }, error =>{alert("Ha ocurrido un error");
    })
    this.cerrarModal();
  }
  
  editarHabTecnica(habTec: HabTecnicaDTO): void {

    this.habTecnica = habTec;
    this.tituloModal = "Editar elemento en Habilidades Técnicas";
    this.agregarEditarActivado = true;
    
  }

  editarHabBlanda(habBlan: HabBlanda): void {

    this.habBlanda = habBlan;
    this.tituloModal = "Editar elemento en Habilidades Blandas";
    this.agregarEditarActivado = true;
  }

  procesarEditarTecnica(habTecEditada: HabTecnicaDTO): void {

    let idHabTecEditada: any = habTecEditada.id;
    this.portfolioServ.editarHabTecnica(idHabTecEditada, habTecEditada).subscribe(data => {
      alert("Habilidad editada con éxito");
      this.listarHabTecnicas();
      }, error =>{
        alert("Ha ocurrido un error");
      }
    );
    this.cerrarModal();
  }

  procesarEditarBlanda(habBlanEditada: HabBlanda): void {

    let idHabBlanEditada: any = habBlanEditada.id;
    this.portfolioServ.editarHabBlanda(idHabBlanEditada, habBlanEditada).subscribe(data => {
      alert("Habilidad editada con éxito");
      this.listarHabBlandas();
      }, error =>{
        alert("Ha ocurrido un error");
      }
    );
    this.cerrarModal();
  }

  eliminarClick(habTecId: any): void {
    if(habTecId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarHabTecnica(habTecId).subscribe(data => {
        alert("Educación eliminada con éxito");
        this.listarHabTecnicas();
        });
    }
  }

  cerrarModal(): void {
    this.esHabTecnica = false;
    this.esHabBlanda = false;
    this.agregarEditarActivado = false;
    this.listarHabTecnicas();
    this.listarHabBlandas();

  }
}
