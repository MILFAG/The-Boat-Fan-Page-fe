import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  

  constructor() {    
  }
 
  
  formatearFecha(fecha:string, hora?:boolean):string{
    const fechaFormateada = new Date(fecha)
    if(hora)
    return fechaFormateada.toLocaleDateString("es-AR",{hour: "numeric", minute: "numeric"})
    else
    return fechaFormateada.toLocaleDateString("es-AR")
  }
    
  obtenerHoras(fecha: Date){
    if (!(fecha instanceof Date)){
      fecha =  new Date(fecha);
    }
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  }

  aclararColor(color:string, porcentaje:number):String{
    color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
    porcentaje = Math.floor((255*porcentaje)/100);
    return color = `#${this.agregarLuminosidad(color.substring(0,2), porcentaje)}${this.agregarLuminosidad(color.substring(2,4), porcentaje)}${this.agregarLuminosidad(color.substring(4,6), porcentaje)}`;
  }
  
   private agregarLuminosidad(color:string, amount:number):string{
    let cc = parseInt(color,16) + amount;
    let c = (cc > 255) ? 255 : (cc);
    return (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
  }
  
  
   private extraerLuminosidad (color:string, amount:number):string{
    let cc = parseInt(color,16) - amount;
    let c = (cc < 0) ? 0 : (cc);
    return (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
  }
  
   oscurecerColor (color:string, amount:number){
    color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
    amount = Math.floor((255*amount)/100);
    return color = `#${this.extraerLuminosidad(color.substring(0,2), amount)}${this.extraerLuminosidad(color.substring(2,4), amount)}${this.extraerLuminosidad(color.substring(4,6), amount)}`;
  }
  

}