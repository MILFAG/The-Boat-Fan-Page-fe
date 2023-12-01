import { Component } from '@angular/core';
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
          title: 'Noticia agregada con éxito',
        });
      }
    });
    
  }
  
}
