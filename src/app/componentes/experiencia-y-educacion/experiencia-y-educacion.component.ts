import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  //VARIABLES DEL MODELO
  experiencia:any = [
    {
      nombreOrganismo: "A Pedal", 
      fechaInicio: "setiembre 2020", 
      fechaFin: "actualidad",
      puesto: "fundadora",
      descripcion: "algo para decir...",
      url_logo: ""
    },

    {
      nombreOrganismo: "Centro Vipassana", 
      fechaInicio: "agosto 2019", 
      fechaFin: "agosto 2020",
      puesto: "manager",
      descripcion: "sin palabras...",
      url_logo: ""
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
