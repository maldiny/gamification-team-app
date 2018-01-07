import { RolesTable } from './roles-table';
import { RolesService } from '../../services/roles.service';

import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import $ from 'jquery';
import { MatTableDataSource } from '@angular/material';
import { Roles } from '../../model/roles';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  public datasource = new MatTableDataSource<Roles>();

  constructor(private rolesService: RolesService){
  }

  refreshTable(event):void{
    this.rolesService.getRoles().subscribe((response) => {
      this.datasource = new MatTableDataSource<Roles>(response._embedded.roles);
    });
  }
}
