import { Component, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Roles } from '../../model/roles';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'roles-table',
  styleUrls: ['roles-table.css'],
  templateUrl: 'roles-table.html',
})
export class RolesTable {
  displayedColumns = ['id', 'nombre', 'descripcion', 'caracteristicas', 'action'];

  public dataSource = new MatTableDataSource<Roles>();

  public rolesForm: Roles;

  constructor(private rolesService: RolesService){
    this.rolesForm = new Roles();
    this.loadRoles();
  }

  loadRoles(){
    this.rolesService.getRoles().subscribe((response) => {
      this.dataSource = new MatTableDataSource<Roles>(response._embedded.roles);
    });
  }

  updateRol(item: Roles){
    this.rolesForm = item;
  }

  removeRol(item: Roles){
    this.rolesService.deleteRoles(item).subscribe((response) =>{
      this.loadRoles();
    });
  }

  acceptButtonDisabled() {
    let disabled = false;
    if (this.rolesForm.nombre == undefined ||
      this.rolesForm.descripcion == undefined){
      disabled = true;
    }else{
      if (this.rolesForm.nombre.length <= 3 ||
        this.rolesForm.descripcion.length <= 3){
        disabled = true;
      }
    }
    return disabled;
  }

  reiniciarRol(){
    this.rolesForm = new Roles();
  }

  enviarRol(){
    if( this.rolesForm._links != undefined){
      this.rolesService.putRoles(this.rolesForm).subscribe((response) =>{
        this.loadRoles();
      });
    }else{
      this.rolesService.postRoles(this.rolesForm).subscribe((response) =>{
        this.loadRoles();
      });
    }
  }
}
