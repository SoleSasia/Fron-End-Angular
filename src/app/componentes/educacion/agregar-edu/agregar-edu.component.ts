import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  @Output() agregarNombre = new EventEmitter<string>();

  nombreInstitucion:string="";

  constructor() { }

  ngOnInit(): void {
  }

  doAgregar(){
    this.agregarNombre.emit(this.nombreInstitucion);
  }
}
