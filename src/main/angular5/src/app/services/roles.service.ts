import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Roles,EmbeddedRoles } from "../model/roles";
import { Pagination } from '../model/pagination';
import { LocationService } from './location.service';
 
@Injectable()
export class RolesService {
   public _embedded: EmbeddedRoles;
   public page: Pagination;
   public error;
   public code;
   public message;
   public status;
   constructor(private http: Http,
               private locationService: LocationService) {
   }
 
   getRoles(): Observable<RolesService> {
      return this.http.get(this.locationService.location + "roles")
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }


  postRoles(roles): Observable<RolesService>{
    const url = this.locationService.location + "roles";

    return this.http.post(url, roles)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  putRoles(roles): Observable<RolesService>{
    return this.http.put(roles._links.roles.href, roles)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  deleteRoles(roles): Observable<RolesService>{
     return this.http.delete(roles._links.roles.href)
      .map((response: Response) => response.json())
      .catch(this.error);

  }
}