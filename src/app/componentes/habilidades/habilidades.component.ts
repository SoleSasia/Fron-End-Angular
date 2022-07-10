import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  //VARIABLES DEL MODEL  
  habilidadBlanda:any =[ 
    {
      id:'1',
      descripcion:'Trabajo en equipo',
      icon: 'fa-solid fa-users'
    },
    {
      id:'2',
      descripcion:'Comunicación efectiva',
      icon: 'fa-solid fa-comments'
    },
    {
      id:'3',
      descripcion:'Resolución de problemas',
      icon: 'fa-solid fa-wrench'
    },
    {
      id:'4',
      descripcion:'Autodidacta y curiosa',
      icon: 'fa-solid fa-laptop'
    }
]


  constructor() { }

  ngOnInit(): void {
  }

}
