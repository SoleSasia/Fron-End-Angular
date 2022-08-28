import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HabTecnicaDTO } from 'src/app/dto/habTecnicaDTO';

@Component({
  selector: 'app-tecnica-agregar-editar',
  templateUrl: './tecnica-agregar-editar.component.html',
  styleUrls: ['./tecnica-agregar-editar.component.css']
})
export class TecnicaAgregarEditarComponent implements OnInit {

  @Input() habilidadTecnica: HabTecnicaDTO;
  @Output() agregandoHabTecnica = new EventEmitter<HabTecnicaDTO>();
  @Output() editandoHabTecnica = new EventEmitter<HabTecnicaDTO>();

  habTecnica: HabTecnicaDTO;

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
