import { Component, OnInit } from '@angular/core';
import { HabBlanda } from 'src/app/dto/habBlanda';
import { HabTecnica } from 'src/app/dto/habTecnica';
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
  
  listaHabTecnica: HabTecnica[] = [
    /*{
      id:1,
      nombreHabilidad: 'Java',
      urlIcono: 'fa-brands fa-java',
      nivelId: 1
        },
        {
      id:2,
      nombreHabilidad: 'Html5',
      urlIcono: 'fa-brands fa-html5',
      nivelId: 2
        },
        {
      id:3,
      nombreHabilidad: 'CSS3',
      urlIcono: 'fa-brands fa-css3-alt',
      nivelId: 2
        },
        {
      id:4,
      nombreHabilidad: 'Javascript',
      urlIcono: 'fa-brands fa-js-square',
      nivelId: 2
        }*/
  ];

  habTecnica: HabTecnica;

  listaNiveles: NivelHabilidad[] = [
    /*{ id : 1, nombreNivel : "Avanzado", style : "width: 75%" },
    { id : 2, nombreNivel : "Intermedio", style : "width: 50%" },
    { id : 3, nombreNivel : "Básico", style : "width: 25%" }*/
  ];

  listaHabBlanda: HabBlanda[] = [];
  habBlanda: HabBlanda;

  tituloModal: string = "";

  //variable para mostrar el modal
  agregarEditarActivado: boolean = false;

  //variable para mostrar contenido del modal segun tipo de habilidad
  esHabTecnica: boolean = false;
  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {

    /*//TODO: revisar e implementar obtenerDatos
    this.portfolioServ.obtenerDatos().subscribe(data => {
      this.listaHabTecnica = data.habilidadTecnica;
    })*/

    this.listarHabTecnicas();
    this.listarHabBlandas();
  }
  
  listarHabTecnicas() {
    this.portfolioServ.listarHabTecnicas().subscribe(data => {this.listaHabTecnica = data})
  }

  listarHabBlandas() {
    this.portfolioServ.listarHabBlandas().subscribe(data => {this.listaHabBlanda = data})
  }

  abrirModal() : void {

    if (this.esHabTecnica){
      let habTec = {id:0,nombreHabilidad:"",urlIcono:"",nivelId:0};
      this.habTecnica = habTec;
      this.tituloModal = "Agregar elemento a Habilidades Técnicas";
      this.agregarEditarActivado = true;
      
    } else if (!this.esHabTecnica){ //probar comentando este if
        let habBlan = {id:0,nombreHabilidad:"",urlIcono:""};
        this.habBlanda = habBlan;
        this.tituloModal = "Agregar elemento a Habilidades Blandas";
        this.agregarEditarActivado = true;        
      }
  }

  procesarAgregarTecnica(nuevaHabTecnica:HabTecnica) : void { 
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
  
  editarHabTecnica(habTec: HabTecnica): void {

    this.habTecnica = habTec;
    this.tituloModal = "Editar elemento en Habilidades Técnicas";
    this.agregarEditarActivado = true;
    
  }

  editarHabBlanda(habBlan: HabBlanda): void {

    this.habBlanda = habBlan;
    this.tituloModal = "Editar elemento en Habilidades Blandas";
    this.agregarEditarActivado = true;
  }

  procesarEditarTecnica(habTecEditada: HabTecnica): void {

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
    this.esHabTecnica =false;
    this.agregarEditarActivado = false;
    this.listarHabTecnicas();
    this.listarHabBlandas();

  }
}
