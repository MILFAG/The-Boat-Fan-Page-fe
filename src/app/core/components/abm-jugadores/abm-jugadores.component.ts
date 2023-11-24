import { Component, OnInit, ViewChild } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { JugadorService } from '../../services/jugador.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditarJugadorComponent } from './editar-jugador/editar-jugador.component';

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
  


  constructor(private jugadorService:JugadorService, private dialog: MatDialog){

    
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
    const dialogRef = this.dialog.open(EditarJugadorComponent,{
      disableClose: true,
    width: '50%',
    data: jugador
    })
    dialogRef.afterClosed().subscribe(jugador => {
      if (!(jugador == null)) {        
        this.jugadorService.actualizarJugador(jugador).subscribe(respuesta=> {
          Swal.fire({
            icon: 'success',
            title: 'Jugador modificado con éxito',
        })
        ,this.obtenerJugadores()   
      })
    }});
    
  }

  borrar(id:string){    
    Swal.fire({
      icon: 'warning',    
      title: '¿Está seguro de eliminar el jugador?',
      text: 'Esta opción no se puede deshacer',
      showConfirmButton: true,
      confirmButtonText:'SI',
      focusConfirm: false,
      focusDeny:true,
      showDenyButton: true      
    }).then((resultado)=> {
      if(resultado.isConfirmed)
        {
          this.jugadorService.eliminarJugador(id).subscribe(respuesta => { 
            Swal.fire({
            icon: 'success',
            title: 'Jugador eliminado con éxito',
          }),
          this.obtenerJugadores()       
        })
        }}           
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregar():void{
    const dialogRef = this.dialog.open(EditarJugadorComponent,{
      disableClose: true,
    width: '50%',
    data: new Jugador()
    })
    dialogRef.afterClosed().subscribe(jugador => {
      if (!(jugador == null)) {        
        this.jugadorService.agregarJugador(jugador).subscribe(respuesta=> {
          Swal.fire({
            icon: 'success',
            title: 'Jugador agregado con éxito',
        })
        ,this.obtenerJugadores()   
      })
    }});
    
  }
}
