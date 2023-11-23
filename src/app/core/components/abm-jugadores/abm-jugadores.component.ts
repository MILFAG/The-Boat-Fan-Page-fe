import { Component, OnInit, ViewChild } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { JugadorService } from '../../services/jugador.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-abm-jugadores',
  templateUrl: './abm-jugadores.component.html',
  styleUrls: ['./abm-jugadores.component.css']
})
export class AbmJugadoresComponent implements OnInit{


  jugadores!: Jugador[]
  dataSource! : MatTableDataSource<Jugador>
  displayedColumns: string[] = ['id', 'usuario', 'tag', 'acciones'];  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  


  constructor(private jugadorService:JugadorService){
    
  }

  ngOnInit(): void {
    this.obtenerJugadores()
  }

  obtenerJugadores():void{ 
    this.jugadorService.obtenerJugadores().subscribe((respuesta)=> 
    {this.jugadores = respuesta as Jugador[]; 
     this.dataSource = new MatTableDataSource(this.jugadores);
     this.dataSource.paginator = this.paginator;
    })
  }

  editar(jugador:Jugador){
    console.log('hola,estoy editando')
  }

  borrar(id:string){    
     this.jugadorService.eliminarJugador(id) 
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
