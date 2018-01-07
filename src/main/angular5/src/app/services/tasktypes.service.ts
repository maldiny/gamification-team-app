import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TaskTypes,EmbeddedTaskTypes } from "../model/tasktypes";
import { Pagination } from '../model/pagination';
import { LocationService } from './location.service';
 
@Injectable()
export class TasktypesService {
   public _embedded: EmbeddedTaskTypes;
   public page: Pagination;
   public error;
   public code;
   public message;
   public status;
   constructor(private http: Http,
               private locationService: LocationService) {
   }
 
   getTasktypes(): Observable<TasktypesService> {
      return this.http.get(this.locationService.location + "tasktypes")
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }


  postTasktypes(tasktypes): Observable<TasktypesService>{
    const url = this.locationService.location + "tasktypes";

    return this.http.post(url, tasktypes)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  putTasktypes(tasktypes): Observable<TasktypesService>{
    return this.http.put(tasktypes._links.taskTypes, tasktypes)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  deleteTasktypes(tasktypes): Observable<TasktypesService>{
     return this.http.delete(tasktypes._links.taskTypes.href)
      .map((response: Response) => response.json())
      .catch(this.error);

  }
}