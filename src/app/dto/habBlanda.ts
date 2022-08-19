export class HabBlanda {

    id? : number;
    nombreHabilidad : string;
    urlIcono : string;
    
//personaId: number;

    constructor(nombreHabilidad: string, urlIcono: string) {
        this.nombreHabilidad = nombreHabilidad;
        this.urlIcono = urlIcono;
    }
}