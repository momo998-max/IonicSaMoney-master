import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-back-admin',
  templateUrl: './back-admin.page.html',
  styleUrls: ['./back-admin.page.scss'],
})
export class BackAdminPage implements OnInit {

  constructor(
    private router:Router,
    private storage:Storage) { }

  ngOnInit() {
  }

  moveBack(page:string){     
      this.router.navigateByUrl(page);
  }

  disconnect(){
      this.storage.clear();
      this.router.navigateByUrl('login');
  }

}
