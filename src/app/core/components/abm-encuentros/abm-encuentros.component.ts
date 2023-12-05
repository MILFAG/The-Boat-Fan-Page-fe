import { Component, OnInit, ViewChild } from '@angular/core';
import { Encuentro } from '../../models/encuentro';
import { EncuentroService } from '../../services/encuentro.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditarEncuentroComponent } from './editar-encuentro/editar-encuentro.component';
import { FuncionesService } from '../../services/funciones.service';


@Component({
  selector: 'app-abm-encuentros',
  templateUrl: './abm-encuentros.component.html',
  styleUrls: ['./abm-encuentros.component.css']
})
export class AbmEncuentrosComponent  implements OnInit{


  encuentros!: Encuentro[]
  dataSource! : MatTableDataSource<Encuentro>
  displayedColumns: string[] = ['id', 'fecha', 'rival', 'logo','acciones'];  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  


  constructor(private encuentroService:EncuentroService, private dialog: MatDialog, protected funcionesService: FuncionesService){

    
  }

  ngOnInit(): void {
    this.obtenerEncuentros()
  }

  obtenerEncuentros():void{ 
    this.encuentroService.obtenerEncuentros().subscribe((respuesta)=> 
    {this.encuentros = respuesta as Encuentro[]; 
     this.dataSource = new MatTableDataSource(this.encuentros);
     this.dataSource.paginator = this.paginator;
    })
  }

  editar(encuentro:Encuentro){    
    const dialogRef = this.dialog.open(EditarEncuentroComponent,{
      disableClose: true,
    width: '50%',
    data: encuentro
    })
    dialogRef.afterClosed().subscribe(encuentro => {
      if (!(encuentro == null)) {        
        this.encuentroService.actualizarEncuentro(encuentro).subscribe(respuesta=> {
          Swal.fire({
            icon: 'success',
            title: 'Encuentro modificado con éxito',
        })
        ,this.obtenerEncuentros()   
      })
    }});
    
  }

  borrar(id:string){    
    Swal.fire({
      icon: 'warning',    
      title: '¿Está seguro de eliminar el encuentro?',
      text: 'Esta opción no se puede deshacer',
      showConfirmButton: true,
      confirmButtonText:'SI',
      focusConfirm: false,
      focusDeny:true,
      showDenyButton: true      
    }).then((resultado)=> {
      if(resultado.isConfirmed)
        {
          this.encuentroService.eliminarEncuentro(id).subscribe(respuesta => { 
            Swal.fire({
            icon: 'success',
            title: 'Encuentro eliminado con éxito',
          }),
          this.obtenerEncuentros()       
        })
        }}           
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregar():void{
    const dialogRef = this.dialog.open(EditarEncuentroComponent,{
      disableClose: true,
    width: '50%',
    data: new Encuentro()
    })
    dialogRef.afterClosed().subscribe(encuentro => {
      if (!(encuentro == null)) {        
        this.encuentroService.agregarEncuentro(encuentro).subscribe(respuesta=> {
          Swal.fire({
            icon: 'success',
            title: 'Encuentro agregado con éxito',
        })
        ,this.obtenerEncuentros()   
      })
    }});
    
  }
}
