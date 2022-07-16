import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  //VARIABLES DEL MODELO
    educacion:any = [
    {
      nombreInstitucion: "Universidad Nacional de Córdoba", 
      fechaInicio: "2006", 
      fechaFin: "2010 (sin concluir)",
      titulo: "Licenciatura en Composición Musical",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et porro totam sunt pariatur animi sit ullam, unde sapiente voluptate rerum illum placeat fugiat aliquam, voluptatibus nostrum inventore fugit. Nihil.",
      urlLogo: "../../../assets/unc.png"
    },
    {
      nombreInstitucion: "Universidad Tecnológica Nacional - Facultad Regional de Villa María", 
      fechaInicio: "Julio", 
      fechaFin: "diciembre de 2021",
      titulo: "Diplomatura en Introducción a la programación en Java",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et porro totam sunt pariatur animi sit ullam, unde sapiente voluptate rerum illum placeat fugiat aliquam, voluptatibus nostrum inventore fugit. Nihil.",
      urlLogo: "../../../assets/utn_frvm.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  procesarAgregar(nombreInstitucion: string){
    console.log(nombreInstitucion);
    /*console.log("llega el mensaje del componente hijo");
    
    CREAR LÓGICA PARA QUE LA INFO SE AGREGE A LA BASE DE DATOS*/
  }

}
