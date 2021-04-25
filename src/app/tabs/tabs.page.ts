import { Component, OnInit } from '@angular/core';
import { DepotService } from '../service/depot.service';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  

  solde_tabs:number;
  subscription:Subscription;
  constructor(
    private depotService:DepotService,
    private dataService:DataServiceService,
    private router:Router
    ) {}


  ngOnInit() {
    this.getInfosACcount();
  }

  ionViewDidLoad(){
    console.log("ion-view-load-tabs");
  }

  ionViewWillEnter(){
    console.log("1-tabs");
  
  }

  ionViewDidEnter(){
    this.getInfosACcount();
    console.log("2-tabs");
    // this.subscription =  this.subscription = this.dataService.currentMessage.subscribe((solde:any) => this.solde_tabs = solde);
    this.dataService.changeSolde(this.solde_tabs);
    console.log('tabs-solde-apres:'+this.solde_tabs);
  }

  ionViewWillLeave(){
    console.log("3-tabs");
  }

  ionViewDidLeave(){
    console.log("4-tabs");
  }

  getInfosACcount(){
    this.depotService.getInfosAccount()
        .subscribe(
          data=>{
           
            if (!data['detailsCompte']['statut']) {
              this.solde_tabs = data['detailsCompte']['solde'];
            }
            // console.log(typeof(data['detailsCompte']['solde']))
          },
          error=>{
            console.log(error);
          })
  }
  
  





}
