import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  @Output() agregarEdu = new EventEmitter<any>();

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

  doAgregar(){
    this.agregarEdu.emit(this.educacion);
  }
}
