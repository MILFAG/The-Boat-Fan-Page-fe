export class Agente {
    id: string ;
    nombre: string ;
    descripcion: string;
    imagenCara: string ;
    imagenCompleta: string;
    coloresGradiente: string[] ;

constructor(id:string,nombre: string, descripcion: string, imagenCara: string, imagenCompleta: string, coloresGradiente: string[]){
    this.id = id
    this.nombre = nombre
    this.descripcion = descripcion
    this.imagenCara = imagenCara
    this.imagenCompleta = imagenCompleta
    this.coloresGradiente = coloresGradiente
}
    
}