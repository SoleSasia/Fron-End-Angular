import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ServEduService } from 'src/app/servicios/serv-edu.service';

@Component({
  selector: 'app-modificar-edu',
  templateUrl: './modificar-edu.component.html',
  styleUrls: ['./modificar-edu.component.css']
})
export class ModificarEduComponent implements OnInit {

  @Input() educacion: Educacion;
  @Output() cierreModal: EventEmitter<any>;
  
  id: any;

  //constructor(private eduServ:ServEduService, private activRouter:ActivatedRoute, private router:Router) { }

  constructor(private eduServ:ServEduService,private router:Router){}

  ngOnInit(): void {
    this.obternerId();
    //this.traerDatosEdu()
  }

  obternerId(){
    this.id = this.educacion.id;
    console.log(this.id);
  }

  /*
  traerDatosEdu(){
    this.eduServ.buscarEdu(this.id).subscribe(data =>{this.educacion = data});
  }
  */

  doModificar(){
    this.eduServ.editarEdu(this.id, this.educacion).subscribe(data => {
      this.router.navigate([""]);
    }, err => {alert("No se ha podido modificar este elemento");
    })
  }

  cerrarModal(){
    this.cierreModal.emit();
  }
}
