import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { EncuentroService } from '../../services/encuentro.service';
import Swiper from 'swiper';
import { Encuentro } from '../../models/encuentro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit, OnDestroy, AfterViewInit{

  swiper!: Swiper
  encuentros!: Encuentro[]



  constructor(private encuentrosService: EncuentroService){
  
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    this.swiper.destroy()
  }
 

  ngOnInit(): void {
    this.obtenerData();
     
       
  }

obtenerData():void{
  this.encuentrosService.obtenerEncuentros().subscribe((respuesta:any)=> {
    this.encuentros = respuesta as Encuentro[];     
    this.swiper = new Swiper('.swiper', {      
      direction: 'vertical',
      loop: false ,     
      spaceBetween: 0,      
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },   
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },                         
    });      
    
    

  })
  
}

}
