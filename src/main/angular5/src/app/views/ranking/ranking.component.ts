import { RankingTable } from './ranking-table';
import { UsuariosService } from '../../services/usuarios.service';
import { LocationService } from '../../services/location.service';

import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import $ from 'jquery';
import { MatTableDataSource } from '@angular/material';
import { Usuarios } from '../../model/usuarios';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  private serverUrl;
  private time = "Loading...";
  private stompClient;

  public datasource = new MatTableDataSource<Usuarios>();

  constructor(private usuariosService: UsuariosService,
               private locationService: LocationService){
    this.serverUrl = this.locationService.location + "socket";
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.debug = null;
      that.stompClient.subscribe("/time", (message) => {
        if(message.body) {
          that.time = message.body;
        }
      });
    });
  }

  refreshTable(event):void{
    this.usuariosService.getUsuarios().subscribe((response) => {
      this.datasource = new MatTableDataSource<Usuarios>(response._embedded.usuarios);
    });
  }
}
