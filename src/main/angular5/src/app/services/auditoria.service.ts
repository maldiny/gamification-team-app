import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Auditoria ,EmbeddedAuditoria } from "../model/auditoria";
import { Pagination } from '../model/pagination';
import { LocationService } from './location.service';
 
@Injectable()
export class AuditoriasService {
   public _embedded: EmbeddedAuditoria;
   public page: Pagination;
   public error;
   public code;
   public message;
   public status;
   constructor(private http: Http,
               private locationService: LocationService) {
   }
 
   getAuditorias(): Observable<AuditoriasService> {
      return this.http.get(this.locationService.location + "auditorias")
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }


  postAuditorias(auditorias): Observable<AuditoriasService>{
    const url = this.locationService.location + "auditorias";

    return this.http.post(url, auditorias)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  putAuditorias(auditorias): Observable<AuditoriasService>{
    return this.http.put(auditorias._links.auditorias.href, auditorias)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  deleteAuditorias(auditorias): Observable<AuditoriasService>{
     return this.http.delete(auditorias._links.auditorias.href)
      .map((response: Response) => response.json())
      .catch(this.error);

  }
}