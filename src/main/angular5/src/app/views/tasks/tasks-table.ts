import { Component, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Tasks } from '../../model/tasks';
import { TaskTypes } from '../../model/tasktypes';
import { Usuarios } from '../../model/usuarios';
import { TasksService } from '../../services/tasks.service';
import { TasktypesService } from '../../services/tasktypes.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'tasks-table',
  styleUrls: ['tasks-table.css'],
  templateUrl: 'tasks-table.html',
})
export class TasksTable {
  displayedColumns = ['id', 'tipo', 'descripcion', 'puntos', 'reporter', 'asignado', 'estado', 'action'];

  public dataSource = new MatTableDataSource<Tasks>();

  public tasksForm: Tasks;
  public usuarios: Usuarios[];
  public tasktypes: TaskTypes[];

  constructor(private usuariosService: UsuariosService,
              private tasksService: TasksService,
              private tasktypesService: TasktypesService){
    this.tasksForm = new Tasks();
    this.loadTasks();
    this.loadUsuarios();
    this.loadTaskTypes();
  }

  loadTasks(){
    this.tasksService.getTasks().subscribe((response) => {
      this.dataSource = new MatTableDataSource<Tasks>(response._embedded.tasks);
    });
  }

  loadUsuarios(){
    this.usuariosService.getUsuarios().subscribe((response) => {
      this.usuarios = response._embedded.usuarios;
    });
  }

  loadTaskTypes(){
    this.tasktypesService.getTasktypes().subscribe((response) => {
      this.tasktypes = response._embedded.tasktypes;
    });
  }

  update(item: Tasks){
    this.tasksForm = item;
  }

  remove(item: Tasks){
    this.tasksService.deleteTasks(item).subscribe((response) =>{
      this.loadTasks();
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
    this.tasksForm = new Tasks();
  }

  enviar(){
    if( this.tasksForm._links != undefined){
      this.tasksService.putTasks(this.tasksForm).subscribe((response) =>{
        this.loadTasks();
      });
    }else{
      this.tasksService.postTasks(this.tasksForm).subscribe((response) =>{
        this.loadTasks();
      });
    }
  }
}
