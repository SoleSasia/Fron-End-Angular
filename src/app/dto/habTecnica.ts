export class HabTecnica {

    id? : number;
    nombreHabilidad : string;
    urlIcono : string;
    nivelId : number;
//personaId: number;

    constructor(nombreHabilidad: string, urlIcono: string, nivelId: number) {
        this.nombreHabilidad = nombreHabilidad;
        this.urlIcono = urlIcono;
        this.nivelId = nivelId;
    }

}