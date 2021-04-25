import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-depot-confirmation',
  templateUrl: './depot-confirmation.component.html',
  styleUrls: ['./depot-confirmation.component.scss'],
})
export class DepotConfirmationComponent implements OnInit {

  @Input() emetteur:string;
  @Input() recepteur:string;
  @Input() montant:string;
  @Input() cni:string;
  @Input() telephoneClient:string;
  @Input() telephoneBeneficiaire:string;

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  __dismiss(result:boolean){
    this.modalController.dismiss({"confirmation":result});
  }

}
