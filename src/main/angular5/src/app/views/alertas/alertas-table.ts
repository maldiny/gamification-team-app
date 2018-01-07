import { Component, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Alertas } from '../../model/alertas';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'alertas-table',
  styleUrls: ['alertas-table.css'],
  templateUrl: 'alertas-table.html',
})
export class AlertasTable {
  displayedColumns = ['id', 'usuario', 'mensaje', 'fecha', 'action'];

  public dataSource = new MatTableDataSource<Alertas>();

  public alertasForm: Alertas;

  constructor(private alertasService: AlertasService){
    this.alertasForm = new Alertas();
    this.loadAlertas();
  }

  loadAlertas(){
    this.alertasService.getAlertas().subscribe((response) => {
      this.dataSource = new MatTableDataSource<Alertas>(response._embedded.alertas);
    });
  }

  update(item: Alertas){
    this.alertasForm = item;
  }

  remove(item: Alertas){
    this.alertasService.deleteAlertas(item).subscribe((response) =>{
      this.loadAlertas();
    });
  }

  reiniciar(){
    this.alertasForm = new Alertas();
  }

  enviar(){
    if( this.alertasForm._links != undefined){
      this.alertasService.putAlertas(this.alertasForm).subscribe((response) =>{
        this.loadAlertas();
      });
    }else{
      this.alertasService.postAlertas(this.alertasForm).subscribe((response) =>{
        this.loadAlertas();
      });
    }
  }
}
