import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/dto/educacion';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-editar-edu',
  templateUrl: './agregar-editar-edu.component.html',
  styleUrls: ['./agregar-editar-edu.component.css']
})

export class AgregarEditarEduComponent implements OnInit {

  @Input() educacion: Educacion;
  //@Output() agregandoEdu = new EventEmitter<Educacion>();
  @Output() editandoEdu = new EventEmitter<Educacion>();

  edu: Educacion;
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  mostrarMsj: boolean = false;
  
  constructor(private portfolioServ : PortfolioService){}

  ngOnInit(): void {
    this.edu=this.educacion;
  }

  agregarEdu(nuevaEdu:Educacion){
    this.portfolioServ.agregarEdu(nuevaEdu).subscribe(data => {
      console.log(data);
      this.respta = data;
      console.log("imprimiendo respta: " + this.respta);
      console.log("msj: "+this.respta.msj + ";" + "isOk: "+this.respta.salioBien);
      }
    );
  }

  editarEdu(){
    this.editandoEdu.emit(this.edu);
  }

}
