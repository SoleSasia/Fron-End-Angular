export class Proyecto {

    id? : number;
    nombreProye : string;
    descripcionProye : string;
    imgUrl : string;
    repoUrl : string;
    liveUrl : string;
    //personaId : number;
    
    constructor( nombreProye : string, descripcionProye : string, imgUrl : string, repoUrl : string, liveUrl : string) {
        this.nombreProye = nombreProye;
        this.descripcionProye = descripcionProye;
        this.imgUrl = imgUrl;
        this.repoUrl = repoUrl;
        this.liveUrl = liveUrl;
    }

}