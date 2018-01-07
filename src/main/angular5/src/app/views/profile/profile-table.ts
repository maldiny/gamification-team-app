import { Component, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TaskTypes } from '../../model/tasktypes';
import { TasktypesService } from '../../services/tasktypes.service';

@Component({
  selector: 'profile-table',
  styleUrls: ['profile-table.css'],
  templateUrl: 'profile-table.html',
})
export class ProfileTable {
  displayedColumns = ['id', 'tipo', 'descripcion', 'puntos', 'action'];

  public dataSource = new MatTableDataSource<TaskTypes>();

  public tasksForm: TaskTypes;

  constructor(private tasktypesService: TasktypesService){
    this.tasksForm = new TaskTypes();
    this.loadTaskTypes();
  }

  loadTaskTypes(){
    this.tasktypesService.getTasktypes().subscribe((response) => {
      this.dataSource = new MatTableDataSource<TaskTypes>(response._embedded.tasktypes);
    });
  }

  update(item: TaskTypes){
    this.tasksForm = item;
  }

  remove(item: TaskTypes){
    console.log(item);
    this.tasktypesService.deleteTasktypes(item).subscribe((response) =>{
      this.loadTaskTypes();
    });
  }

  acceptButtonDisabled() {
    let disabled = false;
    if (this.tasksForm.tipo == undefined ||
      this.tasksForm.descripcion == undefined){
      disabled = true;
    }else{
      if (this.tasksForm.tipo.length <= 3 ||
        this.tasksForm.descripcion.length <= 3){
        disabled = true;
      }
    }
    return disabled;
  }

  reiniciar(){
    this.tasksForm = new TaskTypes();
  }

  enviar(){
    if( this.tasksForm._links != undefined){
      this.tasktypesService.putTasktypes(this.tasksForm).subscribe((response) =>{
        this.loadTaskTypes();
      });
    }else{
      this.tasktypesService.postTasktypes(this.tasksForm).subscribe((response) =>{
        this.loadTaskTypes();
      });
    }
  }
}
