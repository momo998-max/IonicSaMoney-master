import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../service/interfaces.service';
import { DepotService } from '../service/depot.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})

export class TransactionsPage implements OnInit {

  transactions:Transaction[]=[];
  transactionsNoDetailed:Transaction[]=[];
  constructor(
    private router:Router,
    private depotService:DepotService
  ) { }

  ngOnInit() {
    this.getTransactions();
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

  moveOnMenu(){
    this.router.navigateByUrl('tabs');
  }


}
