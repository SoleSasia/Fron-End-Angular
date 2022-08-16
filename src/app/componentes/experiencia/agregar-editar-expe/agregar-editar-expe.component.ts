import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/dto/experiencia';

@Component({
  selector: 'app-agregar-editar-expe',
  templateUrl: './agregar-editar-expe.component.html',
  styleUrls: ['./agregar-editar-expe.component.css']
})

export class AgregarEditarExpeComponent implements OnInit {

  //traigo del componente padre un objeto del tipo Experiencia
  @Input() experiencia: Experiencia;
  //creo los eventos para poder enviar al componente padre objetos del tipo Experiencia
  @Output() agregandoExpe = new EventEmitter<Experiencia>();
  @Output() editandoExpe = new EventEmitter<Experiencia>();
  //objeto de uso local
  expe: Experiencia;

  constructor() { }

  ngOnInit(): void {
    //guardo valores que vienen del padre en el objeto local
    this.expe = this.experiencia;
  }
  //envío al padre objeto con valores ingresados en el modal
  agregarExpe(){
    this.agregandoExpe.emit(this.expe);
  }

  //envío al padre objeto con valores modificados en el modal
  editarExpe(){
    this.editandoExpe.emit(this.expe);
  }

}
