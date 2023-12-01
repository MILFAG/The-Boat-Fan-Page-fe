import { Component, Input, OnInit } from '@angular/core';
import { Encuentro } from 'src/app/core/models/encuentro';

@Component({
  selector: 'app-encuentro',
  templateUrl: './encuentro.component.html',
  styleUrls: ['./encuentro.component.css']
})
export class EncuentroComponent  {

@Input() encuentro!: Encuentro;

constructor() { }


}
