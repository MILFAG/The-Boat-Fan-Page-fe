import { Component, ViewChild } from '@angular/core';
import { Sponsor } from '../../models/sponsor';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SponsorService } from '../../services/sponsor.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarSponsorComponent } from '../abm-sponsors/editar-sponsor/editar-sponsor.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abm-sponsors',
  templateUrl: './abm-sponsors.component.html',
  styleUrls: ['./abm-sponsors.component.css']
})
export class AbmSponsorsComponent {

  sponsors!: Sponsor[]
  dataSource! : MatTableDataSource<Sponsor>
  displayedColumns: string[] = ['id', 'nombre', 'nivel', 'logo', 'acciones'];  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  


  constructor(private sponsorService:SponsorService, private dialog: MatDialog){

    
  }

  ngOnInit(): void {
    this.obtenerSponsors()
  }

  obtenerSponsors():void{ 
    this.sponsorService.obtenerSponsors().subscribe((respuesta)=> 
    {this.sponsors = respuesta as Sponsor[]; 
     this.dataSource = new MatTableDataSource(this.sponsors);
     this.dataSource.paginator = this.paginator;
     console.log(this.sponsors)
    })
  }

  editar(sponsor:Sponsor){    
    const dialogRef = this.dialog.open(EditarSponsorComponent,{
      disableClose: true,
    width: '50%',
    data: sponsor
    })
    dialogRef.afterClosed().subscribe(sponsor => {
      if (!(sponsor == null)) {        
        this.sponsorService.actualizarSponsor(sponsor).subscribe(respuesta=> {
          Swal.fire({
            icon: 'success',
            title: 'Sponsor modificado con éxito',
        })
        ,this.obtenerSponsors()   
      })
    }});
    
  }

  borrar(id:number){    
    Swal.fire({
      icon: 'warning',    
      title: '¿Está seguro de eliminar el sponsor?',
      text: 'Esta opción no se puede deshacer',
      showConfirmButton: true,
      confirmButtonText:'SI',
      focusConfirm: false,
      focusDeny:true,
      showDenyButton: true      
    }).then((resultado)=> {
      if(resultado.isConfirmed)
        {
          this.sponsorService.eliminarSponsor(id).subscribe(respuesta => { 
            Swal.fire({
            icon: 'success',
            title: 'Sponsor eliminado con éxito',
          }),
          this.obtenerSponsors()       
        })
        }}           
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregar():void{
    const dialogRef = this.dialog.open(EditarSponsorComponent,{
      disableClose: true,
    width: '50%',
    data: new Sponsor()
    })
    dialogRef.afterClosed().subscribe(sponsor => {
      if (!(sponsor == null)) {        
        this.sponsorService.agregarSponsor(sponsor).subscribe(respuesta=> {
          Swal.fire({
            icon: 'success',
            title: 'Sponsor agregado con éxito',
        })
        ,this.obtenerSponsors()   
      })
    }});
    
  }
}
