import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup:any = FormGroup;
  errorLogin:boolean=false;

  constructor(
      private authService:AuthentificationService,
      private storage:Storage,
      private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup =  new FormGroup ({
        telephone: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value)
          .subscribe(result=>{
              if(result.token){
                this.storage.set('token',result.token)
              }
              //console.log(this.storage.get('token'));
              this.router.navigateByUrl('tabs');
          },
          error=>{
              this.errorLogin=true;
              console.log(error);
          })
     
    }
  }

  hide(){
    this.errorLogin=false;
  }

}
