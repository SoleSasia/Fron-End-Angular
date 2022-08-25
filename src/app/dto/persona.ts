export class Persona {

    private id? : number;
    private nombre : string;
    private ocupacion : string;
    private bannerUrl : string;
    private email : string;
    private linkedinUrl : string;
    private githubUrl : string;
    private descripcion : string;
    private imgUrl : string;
    private username : string;
    private password : string;

    constructor (   nombre : string,
                    ocupacion : string,
                    bannerUrl : string,
                    email : string,
                    linkedinUrl : string,
                    githubUrl : string,
                    descripcion : string,
                    imgUrl : string,
                    username : string,
                    password : string) 
        {
        this.nombre = nombre,
        this.ocupacion = ocupacion,
        this.bannerUrl = bannerUrl,
        this.email = email,
        this.linkedinUrl = linkedinUrl,
        this.githubUrl = githubUrl,
        this.descripcion = descripcion,
        this.imgUrl = imgUrl,
        this.username = username,
        this.password = password;
    }

}