import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  //MODELO

  persona:any = {
    nombre: "Soledad Sasia",
    ocupacion: "Desarrolladora Web FullStack", 
  }

  constructor() { }

  ngOnInit(): void {
    
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
