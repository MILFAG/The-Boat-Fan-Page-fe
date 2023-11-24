import { Component, OnInit } from '@angular/core';
import { SponsorService } from '../../services/sponsor.service';
import { Sponsor } from '../../models/sponsor';

@Component({
  selector: 'app-sponsor-listado',
  templateUrl: './sponsor-listado.component.html',
  styleUrls: ['./sponsor-listado.component.css']
})
export class SponsorListadoComponent implements OnInit{
  data!:Sponsor[];
  constructor(private sponsorsService:SponsorService){}
  ngOnInit(): void {
    this.obtenerData();
  }

  obtenerData():void{
    this.sponsorsService.obtenerSponsors().subscribe((data)=>this.data=data as Sponsor[]);
  }

}


