import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Noticia } from 'src/app/core/models/noticia';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<EditarNoticiaComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private fb:FormBuilder){
  }
  noticiaForm:any;
  selectFormControl = new FormControl('', Validators.required);
  noticias! : string[];
  opciones = ["Partida", "Novedades"];


  ngOnInit(): void { 
     this.noticiaForm = new FormGroup({
     "tipoControl" : new FormControl<String | null>(null, Validators.required),
     "tituloControl" : new FormControl<String | null>(null, Validators.required),
     "contenidoControl" : new FormControl<String | null>(null, Validators.required),
     "fechaPartidaControl" : new FormControl<String | null>(null, Validators.required),
     "rivalControl" : new FormControl<String | null>(null, Validators.required)
    })
   }
   
   verificar(){
     console.log(this.noticiaForm.value)
   }
   
   
   onNoClick(): void {
     console.log('funciona btn')
     this.dialogRef.close();
   }
 
   get tipoControl() {return this.noticiaForm.get("tipoControl")}
   get tituloControl() {return this.noticiaForm.get("tituloControl")}
   get contenidoControl() {return this.noticiaForm.get("contenidoControl")}
   get fechaPartidaControl() {return this.noticiaForm.get("fechaPartidaControl")}
   get rivalControl() {return this.noticiaForm.get("rivalControl")}
}

