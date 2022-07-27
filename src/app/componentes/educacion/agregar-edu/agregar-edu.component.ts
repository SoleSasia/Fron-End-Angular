import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  @Output() agregarEdu = new EventEmitter<Educacion>();

  educacion: Educacion = 
    {
      tituloEdu:"",
      periodoEdu:"",
      nombreInstituEdu:"",
      descripcionEdu:"",
      urlLogoEdu:""
    };

  constructor() { }

  ngOnInit(): void {
  }

  doAgregar(){
    this.agregarEdu.emit(this.educacion);
  }
}
