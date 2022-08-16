export class Educacion {

    id? : number;
    tituloEdu : string;
    periodoEdu : string;
    institucionEdu : string;
    descripcionEdu : string;
    urlLogoEdu : string;  
    //personaId??  
    
    constructor(tituloEdu : string, periodoEdu : string, institucionEdu : string, descripcionEdu : string, urlLogoEdu : string) {
        this.tituloEdu = tituloEdu;
        this.periodoEdu = periodoEdu;
        this.institucionEdu = institucionEdu;
        this.descripcionEdu = descripcionEdu;
        this.urlLogoEdu = urlLogoEdu;
    }
}
