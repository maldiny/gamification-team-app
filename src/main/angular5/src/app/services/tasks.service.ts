import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Tasks,EmbeddedTasks } from "../model/tasks";
import { Pagination } from '../model/pagination';
import { LocationService } from './location.service';
 
@Injectable()
export class TasksService {
   public _embedded: EmbeddedTasks;
   public page: Pagination;
   public error;
   public code;
   public message;
   public status;
   constructor(private http: Http,
               private locationService: LocationService) {
   }
 
   getTasks(): Observable<TasksService> {
      return this.http.get(this.locationService.location + "tasks")
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }


  postTasks(tasks): Observable<TasksService>{
    const url = this.locationService.location + "tasks";

    return this.http.post(url, tasks)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  putTasks(tasks): Observable<TasksService>{
    return this.http.put(tasks._links.tasks.href, tasks)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  deleteTasks(tasks): Observable<TasksService>{
     return this.http.delete(tasks._links.tasks.href)
      .map((response: Response) => response.json())
      .catch(this.error);

  }
}