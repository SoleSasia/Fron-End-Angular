import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  //MODELO
  nombre: string = 'Soledad Sasia';
  ocupacion: string = 'Desarrolladora Web FullStack';
  backgroundImage = 'assets/triangles-gff33bab01_1280.png';

  constructor() { }

  ngOnInit(): void {
  }

}
