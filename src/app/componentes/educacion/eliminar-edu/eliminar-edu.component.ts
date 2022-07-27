import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-eliminar-edu',
  templateUrl: './eliminar-edu.component.html',
  styleUrls: ['./eliminar-edu.component.css']
})
export class EliminarEduComponent implements OnInit {

  @Output() eliminarEdu = new EventEmitter<any>();

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

  doEliminar(){
    this.eliminarEdu.emit(this.educacion);
  }
}
