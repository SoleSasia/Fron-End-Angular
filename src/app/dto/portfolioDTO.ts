import { Educacion } from "./educacion";
import { Experiencia } from "./experiencia";
import { HabBlanda } from "./habBlanda";
import { HabTecnica } from "./habTecnica";
import { Persona } from "./persona";
import { Proyecto } from "./proyecto";

export class PortfolioDTO {

    persona : Persona;
    educaciones : Educacion [];
    experiencias : Experiencia [];
    habilidadesTecnicas : HabTecnica [];
    habilidadesBlandas : HabBlanda [];
    proyectos : Proyecto [];

    constructor(persona: Persona , 
                educaciones: Educacion[], 
                experiencias: Experiencia[],
                habilidadesTecnicas: HabTecnica[],
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