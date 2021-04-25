import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DepotService } from './depot.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  solde_service:number;
  constructor(private depotService:DepotService) {
    console.log("service");
   }

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  changeSolde(solde:number) {
    this.returnSolde();
    this.messageSource.next(solde)
  }

  getInfosACcount(){
    this.depotService.getInfosAccount()
        .subscribe(
          data=>{
            if (!data['detailsCompte']['statut']) {
              this.solde_service = data['detailsCompte']['solde'];
            }
          },
          error=>{
            console.log(error);
          })
  }


  returnSolde(){
    this.getInfosACcount();
    return this.solde_service;
  }
}
