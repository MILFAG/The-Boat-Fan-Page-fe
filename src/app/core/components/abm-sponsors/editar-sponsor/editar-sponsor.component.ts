import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-sponsor',
  templateUrl: './editar-sponsor.component.html',
  styleUrls: ['./editar-sponsor.component.css']
})
export class EditarSponsorComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<EditarSponsorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private fb:FormBuilder){
  }

  sponsorForm:any;



ngOnInit(): void { 
  this.sponsorForm = new FormGroup({
  "nombreControl" : new FormControl<String | null>(null, Validators.required),
  "nivelControl" : new FormControl<String | null>(null, Validators.required),
  "logoControl" : new FormControl<String | null>(null, Validators.required),
 })
}

verificar(){
  console.log(this.sponsorForm.value)
}


onNoClick(): void {
  this.dialogRef.close();
}
get nombreControl() {return this.sponsorForm.get("nombreControl")}
get nivelControl() {return this.sponsorForm.get("nivelControl")}
get logoControl() {return this.sponsorForm.get("logoControl")}

}


