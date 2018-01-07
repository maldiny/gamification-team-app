import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Alertas,EmbeddedAlertas } from "../model/alertas";
import { Pagination } from '../model/pagination';
import { LocationService } from './location.service';
 
@Injectable()
export class AlertasService {
   public _embedded: EmbeddedAlertas;
   public page: Pagination;
   public error;
   public code;
   public message;
   public status;
   constructor(private http: Http,
               private locationService: LocationService) {
   }
 
   getAlertas(): Observable<AlertasService> {
      return this.http.get(this.locationService.location + "alertas")
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }


  postAlertas(alertas): Observable<AlertasService>{
    const url = this.locationService.location + "alertas";

    return this.http.post(url, alertas)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  putAlertas(alertas): Observable<AlertasService>{
    return this.http.put(alertas._links.alertas.href, alertas)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  deleteAlertas(alertas): Observable<AlertasService>{
     return this.http.delete(alertas._links.alertas.href)
      .map((response: Response) => response.json())
      .catch(this.error);

  }
}