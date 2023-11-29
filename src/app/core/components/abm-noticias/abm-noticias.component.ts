import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Noticia } from '../../models/noticia';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
@Component({
  selector: 'app-abm-noticias',
  templateUrl: './abm-noticias.component.html',
  styleUrls: ['./abm-noticias.component.css']
})
export class AbmNoticiasComponent {
  noticias:Noticia[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog) {}

  agregar():void{
    const dialogRef = this.dialog.open(EditarNoticiaComponent,{
    disableClose: true,
    width: '50%',
    data: new Noticia(),
    })
    dialogRef.afterClosed().subscribe(noticia => {
      if (!(noticia == null)) {        
        this.noticias.push(noticia);
        Swal.fire({
          icon: 'success',
          title: 'Jugador agregado con éxito',
        });
      }
    });
    
  }
  
}
