import { ProfileTable } from './profile-table';
import { TasktypesService } from '../../services/tasktypes.service';

import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import $ from 'jquery';
import { MatTableDataSource } from '@angular/material';
import { TaskTypes } from '../../model/tasktypes';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public datasource = new MatTableDataSource<TaskTypes>();

  constructor(private tasktypesService: TasktypesService){
  
  }

  refreshTable(event):void{
    this.tasktypesService.getTasktypes().subscribe((response) => {
      this.datasource = new MatTableDataSource<TaskTypes>(response._embedded.tasktypes);
    });
  }
}
