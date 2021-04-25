import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from 'src/environments/environment';
import { Transaction } from './interfaces.service';


@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http:HttpClient) { }

  postTransaction(transaction:any):Observable<any>{
    return this.http.post(`${apiURL}agence/transactions`,transaction);
  }

  getTransactionByCode(code:string):Observable<any>{
    return this.http.get(`${apiURL}agence/transactions?codeTransaction=${code}`);
  }

  retraitTransaction(transaction:any,id:number):Observable<any>{
    return this.http.put(`${apiURL}agence/transactions/retrait/${id}`,transaction);
  }

  getInfosAccount():Observable<any>{
    return this.http.get(`${apiURL}administrateur/getInfos`);
  }

  getALlTransactions():Observable<any>{
    return this.http.get(`${apiURL}agence/transactions`);
  }

}
