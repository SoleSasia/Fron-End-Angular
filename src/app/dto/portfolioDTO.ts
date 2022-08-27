import { EduDTO } from "./eduDTO";
import { Experiencia } from "./experiencia";
import { HabBlanda } from "./habBlanda";
import { HabTecnicaDTO } from "./habTecnicaDTO";
import { Persona } from "./persona";
import { Proyecto } from "./proyecto";

export class PortfolioDTO {

    persona : Persona;
    educaciones : EduDTO [];
    experiencias : Experiencia [];
    habilidadesTecnicas : HabTecnicaDTO [];
    habilidadesBlandas : HabBlanda [];
    proyectos : Proyecto [];

    constructor(persona: Persona , 
                educaciones: EduDTO[], 
                experiencias: Experiencia[],
                habilidadesTecnicas: HabTecnicaDTO[],
                habilidadesBlandas: HabBlanda[],
                proyectos: Proyecto[]){

        this.persona = persona;
        this.educaciones = educaciones;
        this.experiencias = experiencias;
        this.habilidadesTecnicas = habilidadesTecnicas;
        this.habilidadesBlandas = habilidadesBlandas;
        this.proyectos = proyectos;   
    }
}