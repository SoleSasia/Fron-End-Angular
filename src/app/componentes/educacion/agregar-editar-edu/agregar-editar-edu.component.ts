import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-editar-edu',
  templateUrl: './agregar-editar-edu.component.html',
  styleUrls: ['./agregar-editar-edu.component.css']
})

export class AgregarEditarEduComponent implements OnInit {

  @Input() educacion: Educacion;
  @Output() agregandoEdu = new EventEmitter<Educacion>();
  @Output() editandoEdu = new EventEmitter<Educacion>();

  edu: Educacion;
  
  //constructor(private portfolioServ : PortfolioService) { }
  constructor(){}

  ngOnInit(): void {
    this.edu=this.educacion;
  }

  agregarEdu(){
    this.agregandoEdu.emit(this.edu);
  }

  editarEdu(){
    this.editandoEdu.emit(this.edu);
  }


  /*
  doAgregar(){
    //emito evento y envío al componente padre el objeto educacion cargado en el modal
    this.agregarEdu.emit(this.educacion);
    //limpio las propiedades cargadas para limpiar los campos del modal
    this.educacion = {tituloEdu:"",periodoEdu:"",nombreInstituEdu:"",descripcionEdu:"",urlLogoEdu:""};
  }
  */
}
