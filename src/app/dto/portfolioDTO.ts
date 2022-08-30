import { EduDTO } from "./eduDTO";
import { ExpeDTO } from "./expeDTO";
import { HabBlandaDTO } from "./habBlandaDTO";
import { HabTecnicaDTO } from "./habTecnicaDTO";
import { Proyecto } from "./proyecto";

export class PortfolioDTO {

    id: number;
    nombre: string;
    ocupacion: string;
    bannerUrl : string;
    email: string;
    linkedinUrl : string;
    githubUrl : string;
    descripcion : string;
    imgUrl : string;
    educaciones: EduDTO[]; 
    experiencias: ExpeDTO[];
    habTecnicas: HabTecnicaDTO[];
    habBlandas: HabBlandaDTO[];
    proyectos: Proyecto[];

    constructor(
                id: number,
                nombre: string,
                ocupacion: string,
                bannerUrl : string,
                email: string,
                linkedinUrl : string,
                githubUrl : string,
                descripcion : string,
                imgUrl : string,
                educaciones: EduDTO[], 
                experiencias: ExpeDTO[],
                habTecnicas: HabTecnicaDTO[],
                habBlandas: HabBlandaDTO[],
                proyectos: Proyecto[]){ 
        
        this.id = id;
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.bannerUrl = bannerUrl;
        this.email = email;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
        this.descripcion = descripcion;
        this.imgUrl = imgUrl;
        this.educaciones = educaciones;
        this.experiencias = experiencias;
        this.habTecnicas = habTecnicas;
        this.habBlandas = habBlandas;
        this.proyectos = proyectos;
    }
}