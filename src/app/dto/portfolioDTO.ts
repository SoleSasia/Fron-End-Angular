import { Educacion } from "./educacion";
import { Experiencia } from "./experiencia";
import { HabBlanda } from "./habBlanda";
import { HabTecnica } from "./habTecnica";
import { Persona } from "./persona";
import { Proyecto } from "./proyecto";

export class PortfolioDTO {

    private persona : Persona;
    private educaciones : Educacion [];
    private experiencias : Experiencia [];
    private habilidadesTecnicas : HabTecnica [];
    private habilidadesBlandas : HabBlanda [];
    private proyectos : Proyecto [];

}