export class Jugador {
    id: number;
    usuario: string;
    tag: string;
    nombre:string;
    apellido:string;
    fechaNacimiento:Date;
    nombreAgente:string;

    constructor(id:number,usuario:string,tag:string,nombre:string,apelllido:string,fechaNacimiento:Date,nombreAgente:string){
        this.id = id;
        this.usuario = usuario;
        this.tag = tag;
        this.nombre = nombre;
        this.apellido = apelllido;
        this.fechaNacimiento = fechaNacimiento;
        this.nombreAgente = nombreAgente;
    }


}
