import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona:any = {
    descripcion: "Entusiasta, apasionada, detallista, autodidacta. Disfruto aprender, encontrar soluciones, trabajar en equipo. ",
    url_foto: "/assets/perfil-bg_blue.png"
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
