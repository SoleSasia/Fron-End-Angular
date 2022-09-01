import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { PersoDTO } from 'src/app/dto/persoDTO';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //TODO: resolver login
  @Input() isLogged: boolean;
  @Input() persona: PersoDTO;
  //recarga vista portfolio
  @Output() recargandoPortfolio = new EventEmitter<any>();

  githubUrl: string;
  linkedinUrl: string;

  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.githubUrl = this.persona.githubUrl;
    this.linkedinUrl = this.persona.linkedinUrl;
  }

  cerrarSesion() {
    this.autenticacion.cerrarSesion();
    //this.recargandoPortfolio.emit();
    window.location.reload();
  }
}
