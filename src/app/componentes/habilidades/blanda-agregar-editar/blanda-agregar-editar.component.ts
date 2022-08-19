import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HabBlanda } from 'src/app/dto/habBlanda';

@Component({
  selector: 'app-blanda-agregar-editar',
  templateUrl: './blanda-agregar-editar.component.html',
  styleUrls: ['./blanda-agregar-editar.component.css']
})
export class BlandaAgregarEditarComponent implements OnInit {

  @Input() habilidadBlanda: HabBlanda;
  @Output() agregandoHabBlanda = new EventEmitter<HabBlanda>();
  @Output() editandoHabBlanda = new EventEmitter<HabBlanda>();

  habBlanda: HabBlanda;

  constructor() { }

  ngOnInit(): void {
    this.habBlanda = this.habilidadBlanda;
  }

  agregarHabBlanda(){
    this.agregandoHabBlanda.emit(this.habBlanda);
  }

  editarHabBlanda(){
    this.editandoHabBlanda.emit(this.habBlanda);
  }

}
