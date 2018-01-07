import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Alertas,EmbeddedAlertas } from "../model/alertas";
import { Pagination } from '../model/pagination';
 
@Injectable()
export class LocationService {
   public location;
   constructor(private http: Http) {
 		if(window.location.hostname == "localhost"){
 			this.location = "http://localhost:8080/";
   		}else{
   			this.location = "https://gamification-team-app.herokuapp.com/";
   		}
   }
 
}