import { Component, Input, OnInit } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  @Input() persona: PersoDTO;
/*
  nombreCompleto: string;
  ocupacion: string;
  fondoBanner: string;

  
  /*
  //VARIABLES DEL MODELO
  persona:any = {
    nombre: "Soledad Sasia",
    ocupacion: "Desarrolladora Web FullStack Jr.", 
  }*/

  constructor() { }

  ngOnInit(): void {
   /*
    this.fondoBanner = this.persona.bannerUrl;
    this.nombreCompleto = this.persona.nombre;
    this.ocupacion = this.persona.ocupacion;
  */
  }
  /*
      ------EJ MASTERCLASS MOD3 SERVICES
      miportfolio:any;

      constructor(private datosPortfolio:PortfolioService) { }

      ngOnInit(): void {
        this.datosPortfolio.obtenerDatos().subscribe(data =>{
          this.miportfolio = data;
        });
      }
  */

}
