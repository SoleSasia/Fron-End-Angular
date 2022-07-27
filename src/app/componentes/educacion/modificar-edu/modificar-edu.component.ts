import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modificar-edu',
  templateUrl: './modificar-edu.component.html',
  styleUrls: ['./modificar-edu.component.css']
})
export class ModificarEduComponent implements OnInit {

  @Output() modificarEdu = new EventEmitter<any>();

  educacion:any = 
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

  doModificar(){
    this.modificarEdu.emit(this.educacion);
  }
}
