export class Experiencia {

    id? : number;
    puestoExpe : string;
    periodoExpe : string;
    organismoExpe : string;
    descripcionExpe : string;
    urlLogoExpe : string;  
    //personaId??  

    constructor(puestoExpe : string, periodoExpe : string, organismoExpe : string, descripcionExpe : string, urlLogoExpe : string){
        this.puestoExpe = puestoExpe;
        this.periodoExpe = periodoExpe;
        this.organismoExpe = organismoExpe;
        this.descripcionExpe = descripcionExpe;
        this.urlLogoExpe = urlLogoExpe;
    }

}