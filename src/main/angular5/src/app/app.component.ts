import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import $ from 'jquery';
import {MatTableDataSource} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public logged: Boolean;

  private menuItemsArray: any[] = [ 
         {"title":"Ranking","link":""},
         {"title":"Tasks","link":"tasks"},
         {"title":"Roles","link":"roles"},
         {"title":"Profile","link":"profile"},
         {"title":"Alerts","link":"alerts"},
         {"title":"Logout","link":"logout"}
   ];

   private config = {
      "animation": "collapse",
      "offset": {
          "top": 55
      },
      closeOnCLick: true
  };

  constructor(private router: Router, private authService: AuthService){
    //this.logged = authService.isCurrentUserFromLocalStorage();
    this.logged = true;
    console.log("OAuth: " + this.logged);
  }

  public onMenuClose(){
  }
  public onMenuOpen(){
  }
  private onItemSelect(item:any){
    this.router.navigate([item.link]);
  }

}
