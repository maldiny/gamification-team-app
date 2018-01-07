import { TasksTable } from './tasks-table';
import { TasksService } from '../../services/tasks.service';

import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import $ from 'jquery';
import { MatTableDataSource } from '@angular/material';
import { Tasks } from '../../model/tasks';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  public datasource = new MatTableDataSource<Tasks>();

  constructor(private tasksService: TasksService){
  }

  refreshTable(event):void{
    this.tasksService.getTasks().subscribe((response) => {
      this.datasource = new MatTableDataSource<Tasks>(response._embedded.tasks);
    });
  }
}
