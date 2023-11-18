export class Rango {
    id: number;
    rango:string;
    division:string;
    iconoChico:string;
    iconoGrande:string;
    color:string;
    colorFondo:string;

    constructor(id:number,rango:string,division:string,iconoChico:string,iconoGrande:string,color:string,colorFondo:string){
        this.id = id;
        this.rango = rango;
        this.division = division;
        this.iconoChico = iconoChico;
        this.iconoGrande = iconoGrande;
        this.color = color;
        this.colorFondo = colorFondo;
    }


}