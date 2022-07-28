import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-eliminar-edu',
  templateUrl: './eliminar-edu.component.html',
  styleUrls: ['./eliminar-edu.component.css']
})
export class EliminarEduComponent implements OnInit {

  @Output() eliminarEdu = new EventEmitter<any>();

  @Input() eduId:any; 
    /*{
      tituloEdu:"",
      periodoEdu:"",
      nombreInstituEdu:"",
      descripcionEdu:"",
      urlLogoEdu:""
    };*/
  

  constructor() { }

  ngOnInit(): void {
  }

  doEliminar(eduId:any){
    this.eliminarEdu.emit(this.eduId);
  }
}
