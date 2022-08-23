import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';
import { Proyecto } from 'src/app/dto/proyecto';

@Component({
  selector: 'app-agregar-editar-proyectos',
  templateUrl: './agregar-editar-proyectos.component.html',
  styleUrls: ['./agregar-editar-proyectos.component.css']
})
export class AgregarEditarProyectosComponent implements OnInit {

  @Input() proyecto: Proyecto;
  @Output() agregandoProye = new EventEmitter<Proyecto>();
  @Output() editandoProye = new EventEmitter<Proyecto>();

  proye : Proyecto;

  constructor() { }

  ngOnInit(): void {
    this.proye = this.proyecto;
  }

  agregarProye(){
    this.agregandoProye.emit(this.proye);
  }

  editarProye(){
    this.editandoProye.emit(this.proye);
  }

}
