import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DepotConfirmationComponent } from '../modal/depot-confirmation/depot-confirmation.component';
import { DepotService } from '../service/depot.service';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-depot-emetteur',
  templateUrl: './depot-emetteur.page.html',
  styleUrls: ['./depot-emetteur.page.scss'],
})


export class DepotEmetteurPage implements OnInit {

  formGroup:any= FormGroup;
  formModal:any;
  subscription:any;

  emetteur_actif:boolean=true;
  beneficiaire_actif:boolean=false;


  montant:number=0;
  frais:number=0;
  total:number=0;

  emetteur:string="";
  telephoneClient:string="";
  cni:string="";
  recepteur:string="";
  montantEnvoyer:string="";
  telephoneBeneficiaire:string="";

  constructor(
    private router:Router,
    public modalController: ModalController,
    private transService:DepotService,
    private alertControl:AlertController,
    private depotService:DepotService) { }

  ngOnInit() {
    this.initForm();
  }

  async successAlert() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'SUCCESS',
      message: 'Depot effecuté avec succés',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentModal() {
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
      this.formGroup.value.nomCompletBeneficiaire= this.formGroup.value.prenombeneficiaire+" "+this.formGroup.value.nombeneficiaire;
      this.formGroup.value.nomCompletClient = this.formGroup.value.prenom+" "+this.formGroup.value.nom;
      this.emetteur =  this.formGroup.value.nomCompletClient;
      this.recepteur = this.formGroup.value.nomCompletBeneficiaire;
      this.cni = this.formGroup.value.cniClient;
      this.telephoneClient = this.formGroup.value.numeroTelClient;
      this.telephoneBeneficiaire = this.formGroup.value.numeroTelBeneficiaire;
      this.montantEnvoyer = this.formGroup.value.montant;

    const modal = await this.modalController.create({
      component: DepotConfirmationComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        "emetteur":this.emetteur,
        "recepteur":this.recepteur,
        "montant":this.montantEnvoyer,
        "cni":this.cni,
        "telephoneClient":this.telephoneClient,
        "telephoneBeneficiaire":this.telephoneBeneficiaire
      }
    });
 

    modal.onDidDismiss().then(data=>{
      this.formModal=data;
      if (this.formModal.data.confirmation) {
          this.EffectuerDepot();
      }
    })
    return await modal.present();
  }
  }


  updateSommes(montant:number){
    this.montant = Number(montant);
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
    this.total = Number(this.montant) + Number(this.frais);
  }

  initForm(){
    this.formGroup =  new FormGroup ({
        cniClient: new FormControl('12345678901234567',[Validators.required,Validators.pattern('[0-9]{17}')]),
        prenom: new FormControl('Ndeye Khady',[Validators.required]),
        nom: new FormControl('Gaye',[Validators.required]),
        numeroTelBeneficiaire: new FormControl('782303561',[Validators.required,Validators.pattern('^[7][5-8]{1}[0-9]{7}')]),
        montant: new FormControl('5000',[Validators.required]),
        frais: new FormControl('',Validators.required),
        total: new FormControl('',[Validators.required]),
        prenombeneficiaire: new FormControl('Momo',[Validators.required]),
        nombeneficiaire: new FormControl('Joop',[Validators.required]),
        numeroTelClient:new FormControl('782303561',[Validators.required,Validators.pattern('^[7][5-8]{1}[0-9]{7}')])

    })
  }

  activate_emetteur(){
    this.emetteur_actif=true;
    this.beneficiaire_actif=false;
    // let emet = document.getElementById('emetteur');
    // let benef = document.getElementById('beneficiaire');
    // benef.setAttribute('fill','outline');
    // console.log(benef);
  }

  activate_beneficiaire(){
    this.emetteur_actif=false;
    this.beneficiaire_actif=true;
  }

  EffectuerDepot(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
      this.formGroup.value.nomCompletBeneficiaire= this.formGroup.value.prenombeneficiaire+" "+this.formGroup.value.nombeneficiaire;
      this.formGroup.value.nomCompletClient = this.formGroup.value.prenom+" "+this.formGroup.value.nom;
      this.emetteur =  this.formGroup.value.nomCompletClient;
      this.recepteur = this.formGroup.value.nomCompletBeneficiaire;
      this.cni = this.formGroup.value.cni;
      this.telephoneClient = this.formGroup.value.numeroTelClient;
      this.telephoneBeneficiaire = this.formGroup.value.numeroTelBeneficiaire;
      this.montantEnvoyer = this.formGroup.value.montant;
      this.transService.postTransaction(this.formGroup.value)
        .subscribe(data=>{
           this.successAlert();
           this.router.navigateByUrl('/tabs/transactions')
        },
        error=>{
          console.log(error);
        })
    }
    
  }

  moveOnMenu(){
    this.router.navigateByUrl('tabs');
  }
}
