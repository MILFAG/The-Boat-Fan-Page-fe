import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Agente } from 'src/app/core/models/agente';
import { Jugador } from 'src/app/core/models/jugador';
import { AgenteService } from 'src/app/core/services/agente.service';

@Component({
  selector: 'app-editar-jugador',
  templateUrl: './editar-jugador.component.html',
  styleUrls: ['./editar-jugador.component.css']
})
export class EditarJugadorComponent implements OnInit{
  
  constructor(public dialogRef: MatDialogRef<EditarJugadorComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private agenteService: AgenteService, private fb:FormBuilder){
  }

  jugadorForm:any;


  selectFormControl = new FormControl('', Validators.required);
  agentes! : string[]


ngOnInit(): void { 
 this.agenteService.obtenerAgentes().subscribe((agentes)=>{
  agentes = agentes as Agente[]
  this.agentes = agentes.map(agente=> agente.nombre)
 });
 this.jugadorForm = new FormGroup({
  "nombreControl" : new FormControl<String | null>(null, Validators.required),
  "apellidoControl" : new FormControl<String | null>(null, Validators.required),
  "usuarioControl" : new FormControl<String | null>(null, Validators.required),
  "tagControl" : new FormControl<String | null>(null, Validators.required),
  "fechaControl" : new FormControl<String | null>(null, Validators.required),
  "agenteControl" : new FormControl<String | null>(null, Validators.required)
 })
}

verificar(){
  console.log(this.jugadorForm.value)
}


onNoClick(): void {
  this.dialogRef.close();
}
get nombreControl() {return this.jugadorForm.get("nombreControl")}
get apellidoControl() {return this.jugadorForm.get("apellidoControl")}
get usuarioControl() {return this.jugadorForm.get("usuarioControl")}
get tagControl() {return this.jugadorForm.get("tagControl")}
get fechaControl() {return this.jugadorForm.get("fechaControl")}
get agenteControl() {return this.jugadorForm.get("agenteControl")}

}


