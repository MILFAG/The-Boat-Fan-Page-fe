import { Component, Input } from '@angular/core';
import { Encuentro } from 'src/app/core/models/encuentro';
import { FuncionesService } from 'src/app/core/services/funciones.service';

@Component({
  selector: 'app-encuentro',
  templateUrl: './encuentro.component.html',
  styleUrls: ['./encuentro.component.css']
})
export class EncuentroComponent  {

@Input() encuentro!: Encuentro;

constructor(protected funcionesService: FuncionesService) { }


}
