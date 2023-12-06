import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Agente } from 'src/app/core/models/agente';
import { Encuentro } from 'src/app/core/models/encuentro';
import { AgenteService } from 'src/app/core/services/agente.service';
import { FuncionesService } from 'src/app/core/services/funciones.service';

@Component({
  selector: 'app-editar-encuentro',
  templateUrl: './editar-encuentro.component.html',
  styleUrls: ['./editar-encuentro.component.css']
})
export class EditarEncuentroComponent {
    
  constructor(public dialogRef: MatDialogRef<EditarEncuentroComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder, private funcionesService: FuncionesService){
  }

  encuentroForm:any;
  selectFormControl!: FormControl



ngOnInit(): void { 
  this.encuentroForm = new FormGroup({
  "nombreRival" : new FormControl<String | null>(null, Validators.required),
  "logoControl" : new FormControl<String | null>(null, Validators.required),
  "horaControl" : new FormControl<String | null>(null, Validators.required),
  "fechaControl" : new FormControl<String | null>(null, Validators.required),
  })
  if(this.data.fecha)
    this.horaControl.setValue(this.funcionesService.obtenerHoras(this.data.fecha))
}

verificar(){
  console.log(this.encuentroForm.value)
}



onNoClick(): void {
  this.dialogRef.close();
}

get nombreRival() {return this.encuentroForm.get("nombreRival")}
get logoControl() {return this.encuentroForm.get("logoControl")}
get horaControl() {return this.encuentroForm.get("horaControl")}
get fechaControl() {return this.encuentroForm.get("fechaControl")}



onOkClick(): void{
  let fecha = new Date(this.fechaControl.value)
  this.data.fecha= fecha.setHours(this.horaControl.value.slice(0,2))
  this.data.fecha= fecha.setMinutes(this.horaControl.value.slice(3,5))
}



}

  
  