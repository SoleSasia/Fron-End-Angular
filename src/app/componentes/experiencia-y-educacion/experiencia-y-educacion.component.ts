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
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et porro totam sunt pariatur animi sit ullam, unde sapiente voluptate rerum illum placeat fugiat aliquam, voluptatibus nostrum inventore fugit. Nihil.",
      urlLogo: ""
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
