import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-mostrar-estadisticas',
  templateUrl: './mostrar-estadisticas.component.html',
  styleUrls: ['./mostrar-estadisticas.component.css']
})
export class MostrarEstadisticasComponent{
  sliderAgentes =[
  '/assets/VIPER.png'
  ]
}
