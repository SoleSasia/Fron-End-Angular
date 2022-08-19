import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HabTecnica } from 'src/app/dto/habTecnica';

@Component({
  selector: 'app-tecnica-agregar-editar',
  templateUrl: './tecnica-agregar-editar.component.html',
  styleUrls: ['./tecnica-agregar-editar.component.css']
})
export class TecnicaAgregarEditarComponent implements OnInit {

  @Input() habilidadTecnica: HabTecnica;
  @Output() agregandoHabTecnica = new EventEmitter<HabTecnica>();
  @Output() editandoHabTecnica = new EventEmitter<HabTecnica>();

  habTecnica: HabTecnica;

  constructor() { }

  ngOnInit(): void {
    this.habTecnica = this.habilidadTecnica;
  }

  agregarHabTecnica(){
    console.log(this.habTecnica.nombreHabilidad + " " +this.habTecnica.nivelId);
    this.agregandoHabTecnica.emit(this.habTecnica);
  }

  editarHabTecnica(){
    this.editandoHabTecnica.emit(this.habTecnica);
  }

}
