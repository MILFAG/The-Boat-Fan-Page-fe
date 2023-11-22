import { Agente } from "./agente";

export class Partida{
    metadata!: Metadata;
    stats!: Stats;
    resultados!: Resultado;    
}

export class Metadata{
    mapa!: Mapa
    inicio!: string
}

export class Mapa{
    id!: string
    nombre!: string
}

export class Stats {
    equipo!: string;
    rango!: number;
    puntaje!: number;
    asesinatos!: number;
    muertes!: number;
    asistencias!: number;
    agente!: Agente;
}
export class Disparos{
    cabeza!: number;
    cuerpo!: number;
    piernas!: number;
}

export class Daño{
    hecho!: number;
    recibido!: number;   
}

export class Resultado {
    rojo!: number;
    azul!: number;
}