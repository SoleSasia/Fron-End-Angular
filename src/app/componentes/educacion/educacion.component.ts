import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
//import { ServEduService } from 'src/app/servicios/serv-edu.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  //VARIABLES DEL MODELO
  listaEdu: Educacion[] = []; 
  
  constructor(private datosPortfolio:PortfolioService) { }
  //constructor(private eduServ:ServEduService) { }

  ngOnInit(): void {
    this.cargarEducaciones();
  }

  procesarAgregar(educacion:any){
    //console.log(educacion);
    //console.log("llega el mensaje del componente hijo");
    /*TO-DO:CREAR LÓGICA PARA QUE LA INFO SE AGREGE A LA BASE DE DATOS*/
    this.listaEdu.push(educacion);
    //console.log(this.listaEdu);
  }

  procesarModificar(educacion:any){
    console.log(educacion);
  }
//TO-DO: lógica id para eliminar 
  procesarEliminar(educacion:any){}

  cargarEducaciones():void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.listaEdu=data.educacion;
    });
    //this.eduServ.verEducaciones().subscribe(data => {this.listaEdu = data});
  }
}
