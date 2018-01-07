import { AlertasTable } from './alertas-table';
import { AlertasService } from '../../services/alertas.service';

import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import $ from 'jquery';
import { MatTableDataSource } from '@angular/material';
import { Alertas } from '../../model/alertas';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {

  public datasource = new MatTableDataSource<Alertas>();

  constructor(private alertasService: AlertasService){
  }

  refreshTable(event):void{
    this.alertasService.getAlertas().subscribe((response) => {
      this.datasource = new MatTableDataSource<Alertas>(response._embedded.alertas);
    });
  }
}
