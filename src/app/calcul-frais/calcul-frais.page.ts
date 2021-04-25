import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calcul-frais',
  templateUrl: './calcul-frais.page.html',
  styleUrls: ['./calcul-frais.page.scss'],
})
export class CalculFraisPage implements OnInit {

  formGroup:any=FormGroup;
  montant:number;
  frais:number;
  constructor(
      private alertControl:AlertController,
      private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup =  new FormGroup ({
        montant: new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9]+')]),
        type: new FormControl('',[Validators.required,])
    })
  }


  moveOnMenu(){
    this.router.navigateByUrl('tabs');
  }
  async successAlert() {
    const alert = await this.alertControl.create({
      cssClass: 'custom',
      header:`${this.frais}`,
      message: 'Les frais du montant',
      buttons: ['OK']
    });
    await alert.present();
  }


  

  calculFrais(){
    if (this.formGroup.valid) {
      this.montant=this.formGroup.value.montant;
    // console.log(typeof(montant));
    let max_Array:number[]=[5000,10000,15000,20000,50000,60000,75000,120000,150000,200000,250000,300000,400000,750000,900000,1000000,1125000,1400000,2000000];
    let frais_Array:number[]=[425,850,1270,1695,2500,3000,4000,5000,6000,7000,8000,9000,12000,15000,22000,25000,27000,30000,35000];
    let i = 0;
    
    while (i<max_Array.length && this.montant>max_Array[i])i++;
     
    if (i<max_Array.length) {
      this.frais = frais_Array[i]
    }else{
      if (this.montant) {
        this.frais = this.montant*0.02;
      }else{
        this.frais = 0;
      } 
    }
    this.successAlert();
  }

  }




}
