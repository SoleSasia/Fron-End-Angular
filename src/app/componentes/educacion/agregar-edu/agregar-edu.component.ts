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
    //emito evento y envío al componente padre el objeto educacion cargado en el modal
    this.agregarEdu.emit(this.educacion);
    //limpio las propiedades cargadas para limpiar los campos del modal
    this.educacion = {tituloEdu:"",periodoEdu:"",nombreInstituEdu:"",descripcionEdu:"",urlLogoEdu:""};
  }
}
