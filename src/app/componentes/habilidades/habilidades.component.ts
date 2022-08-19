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
  isAdmin: boolean = true;
  
  listaHabTecnica: HabTecnica[] = [
    {
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
        }
  ];
  habTecnica: HabTecnica;
  listaNiveles: NivelHabilidad[] = [
    { id : 1, nombreNivel : "Avanzado", style : "width: 75%" },
    { id : 2, nombreNivel : "Intermedio", style : "width: 50%" },
    { id : 3, nombreNivel : "Básico", style : "width: 25%" }
  ];

  listaHabBlanda: HabBlanda[] = [];
  habBlanda: HabBlanda;

  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  esHabTecnica: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {

    /*//TODO: revisar e implementar obtenerDatos
    this.portfolioServ.obtenerDatos().subscribe(data => {
      this.listaHabTecnica = data.habilidadTecnica;
    })*/

    //this.listarHabTecnicas();
    //this.listarHabBlandas();
  }
  
  listarHabTecnicas(): void {
    this.portfolioServ.listarHabTecnicas().subscribe(data => {this.listaHabTecnica = data})
  }

  listarHabBlandas(): void {
    this.portfolioServ.listarHabBlandas().subscribe(data => {this.listaHabBlanda = data})
  }

  abrirModal() : void {

    if (this.esHabTecnica){
      let habTec = {id:0,nombreHabilidad:"",urlIcono:"",nivelId:0};
      this.habTecnica = habTec;
      this.tituloModal = "Agregar elemento a Habilidades Técnicas";
      
    } else if (!this.esHabTecnica){
        let habBlan = {id:0,nombreHabilidad:"",urlIcono:""};
        this.habBlanda = habBlan;
        this.tituloModal = "Agregar elemento a Habilidades Blandas";
        
      }
  }

  //comparar por tipo de objeto que recibe
  procesarAgregar(nuevaHabTec:HabTecnica) : void {
    this.portfolioServ.agregarHabTecnica(nuevaHabTec).subscribe(data => {
      alert("Habilidad agregada con éxito");
     this.listarHabTecnicas();
      }, error =>{
        alert("Ha ocurrido un error");
      }
    );
    this.cerrarModal();
  }

  editarClick(habTec: HabTecnica): void {
    this.habTecnica = habTec;
    this.tituloModal = "Editar elemento en Habilidades Técnicas";
    this.agregarEditarActivado = true;
  }

  procesarEditar(habTecEditada: HabTecnica): void {

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
    this.listarHabTecnicas();
    //this.listarHabBlandas

  }
}
