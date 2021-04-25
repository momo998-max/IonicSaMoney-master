import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import { DepotService } from '../service/depot.service';
import { Transaction } from '../service/interfaces.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface PeriodicElement {
  date: string;
  type: string;
  montant: string;
}


@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  formgroup: any = FormGroup;
  dateDebut:Date;
  constructor(
    private depotService:DepotService,
    private formbuild:FormBuilder,
  ) { }


  transactions:Transaction[]=[];
  transactionsNoDetailed:Transaction[]=[];

  ngOnInit(){
      this.getTransactions();
      this.initForm();
      this.getInfosACcount();
  }

  requestAgain(){
    // if (this.formgroup.value.type==="Tout") {
    //   this.initForm();
    // }
    console.log(this.formgroup.value.type);
  }


initForm(){
    this.formgroup = this.formbuild.group({
        type: ['Tout',[Validators.required]],
        dateDebut:['',[Validators.required]],
        dateFin:['',Validators.required]
  })
}



  detailedTransaction(){
    let transactions:Transaction[]=[]; 
    this.transactionsNoDetailed.map((trans,index)=>{ 
      trans.type="depot";
      transactions.push(trans); 
      if (trans.retrait_effectif){  
        const newTrans={...trans,type:"retrait" };
        transactions.push(newTrans);
      }
    })
    this.transactions=transactions;;
  }

  getTransactions(){
    this.depotService.getALlTransactions()
        .subscribe(
              data=>{
                this.transactionsNoDetailed = data;
                this.detailedTransaction();
                console.log(this.transactions);
              },
              error=>{
                console.log(error);
              }
        )
  }

  getInfosACcount(){
    this.depotService.getInfosAccount()
        .subscribe(
          data=>{
           console.log(data)
            if (!data['detailsCompte']['statut']) {
              // this.solde = data['detailsCompte']['solde'];
            }
            // console.log(typeof(data['detailsCompte']['solde']))
          },
          error=>{
            console.log(error);
          })
  }


  moveOnMenu(){

  }


}
