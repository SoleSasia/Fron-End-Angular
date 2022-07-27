export class Educacion {

    id? : number;
    tituloEdu : string;
    periodoEdu : string;
    nombreInstituEdu : string;
    descripcionEdu : string;
    urlLogoEdu : string;    
    
    constructor(tituloEdu : string, periodoEdu : string, nombreInstituEdu : string, descripcionEdu : string, urlLogoEdu : string) {
        this.tituloEdu = tituloEdu;
        this.periodoEdu = periodoEdu;
        this.nombreInstituEdu = nombreInstituEdu;
        this.descripcionEdu = descripcionEdu;
        this.urlLogoEdu = urlLogoEdu;
        }
}
