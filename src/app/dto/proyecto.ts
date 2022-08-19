export class Proyecto {

    id? : number;
    nombreProyecto : string;
    descripcionProyecto : string;
    imgUrl : string;
    repoUrl : string;
    liveUrl : string;
    //personaId : number;
    
    constructor( nombreProyecto : string, descripcionProyecto : string, imgUrl : string, repoUrl : string, liveUrl : string) {
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.imgUrl = imgUrl;
        this.repoUrl = repoUrl;
        this.liveUrl = liveUrl;
    }

}