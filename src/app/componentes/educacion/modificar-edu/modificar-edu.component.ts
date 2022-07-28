import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-modificar-edu',
  templateUrl: './modificar-edu.component.html',
  styleUrls: ['./modificar-edu.component.css']
})
export class ModificarEduComponent implements OnInit {

  @Input() educacion:Educacion = 
    {
      tituloEdu:"",
      periodoEdu:"",
      nombreInstituEdu:"",
      descripcionEdu:"",
      urlLogoEdu:""
    };
  
  @Output() modificarEdu = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  doModificar(){
    this.modificarEdu.emit(this.educacion);
  }
}
