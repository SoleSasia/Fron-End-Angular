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
  @Output() cerrandoModal = new EventEmitter<any>();
  //@Output() editandoEdu = new EventEmitter<Educacion>();

  edu: Educacion;
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  mostrarMsj: boolean = false;
  
  constructor(private portfolioServ : PortfolioService){}

  ngOnInit(): void {
    this.edu=this.educacion;
  }

  agregarEdu(nuevaEdu:Educacion){
    this.mostrarMsj = true;
    this.portfolioServ.agregarEdu(nuevaEdu).subscribe(data => {
      this.respta = data;
      }
    );
  }

  editarEdu(eduEditada:Educacion){
    this.mostrarMsj = true;
    let idEduEditada: any = eduEditada.id;
    this.portfolioServ.editarEdu(idEduEditada, eduEditada).subscribe(data => {
      console.log(data);
      this.respta = data;
      console.log("imprimiendo respta: " + this.respta);
      console.log("msj: "+this.respta.msj + ";" + "salioBien: "+this.respta.salioBien);
      }
    );
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista
    this.cerrandoModal.emit();
  }

}
