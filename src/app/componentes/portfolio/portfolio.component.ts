import { Component, OnInit } from '@angular/core';
import { PortfolioDTO } from 'src/app/dto/portfolioDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  miPortfolio : PortfolioDTO = {
                id: 0,
                nombre: "",
                ocupacion: "",
                bannerUrl : "",
                email: "",
                linkedinUrl : "",
                githubUrl : "",
                descripcion : "",
                imgUrl : "",
                educaciones: [], 
                experiencias: [],
                habilidadesTecnicas: [],
                habilidadesBlandas: [],
                proyectos: []
  };

  isLogged : boolean = true;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {    
    this.cargarVista();
  }

  cargarVista(){
    this.portfolioServ.obtenerDatos().subscribe(data => {this.miPortfolio = data})
  }
}
