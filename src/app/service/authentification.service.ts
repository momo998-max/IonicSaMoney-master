import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../../environments/environment' 
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http : HttpClient,
    private storage:Storage,
    private router:Router) { }

  login(data:any):Observable<any>{
    return this.http.post(`${apiURL}login_check`,data);
  }

  // deconnected(){
  //   this.storage.removeItem('token');
  //   this.router.navigateByUrl('login');
  // }

  connected(){
    return !!this.storage.get('token');
  }

   async getToken(){
    await this.storage.get('token').then(data=>{
        return data;
    });
  }


}
