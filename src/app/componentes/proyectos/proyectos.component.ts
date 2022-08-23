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
  
  listaProyectos: Proyecto[] = [
    {
      nombreProye : "Portfolio personal",
      descripcionProye : "Trabajo final para la segunda etapa de Argentina Programa #YoProgramo. Aplicación web de arquitectura distribuida. Angular paraf front, Spring-boot para back y MySQL como gestor de base de datos.",
      imgUrl : "../../../assets/Proyecto1.png",
      repoUrl : "https://",
      liveUrl : "https:",
      personaId : 1
    },
    {
      nombreProye : "Murales Telúrbicos",
      descripcionProye : "Sitio web construido a medida para les artistes José Sasia y Geourgina Ravassi",
      imgUrl : "https://cdn.pixabay.com/photo/2021/06/17/17/58/betta-6344236_960_720.jpg",
      repoUrl : "https://",
      liveUrl : "https:",
      personaId : 1
    }
  ]

  proyecto: Proyecto;

  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  
  
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    
   // this.listarProyectos();
}
/*
  listarProyectos() {
    this.portfolioServ.listarProyectos().subscribe(data => {this.listaProyectos = data});
  }
*/

listarProyectos() {
  this.portfolioServ.obtenerDatos().subscribe(data => {this.listaProyectos = data.proyectos})
}

}
