import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';

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

}
