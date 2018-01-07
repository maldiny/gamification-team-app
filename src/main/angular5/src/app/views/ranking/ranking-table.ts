import { Component, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Usuarios } from '../../model/usuarios';
import { Roles } from '../../model/roles';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from '../../services/auth.service';
import { RolesService } from '../../services/roles.service';
import { ViewEncapsulation } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'ranking-table',
  styleUrls: ['ranking-table.css'],
  templateUrl: 'ranking-table.html',
  encapsulation: ViewEncapsulation.None
})
export class RankingTable {
  displayedColumns = ['id', 'nombre', 'apellidos', 'rol', 'puntos_actuales', 'puntos_acumulados', 'action'];

  public dataSource = new MatTableDataSource<Usuarios>();

  public usuariosForm: Usuarios;

  public roles: Roles[];

  constructor(private usuariosService: UsuariosService, 
              private rolesService: RolesService, 
              private authService: AuthService){
    console.log("Usuario logado:" + this.authService.getUsuario());
    this.usuariosForm = new Usuarios();
    this.usuariosForm.nombre = "";
    this.loadUsuarios();
  }

  loadUsuarios(){
    this.usuariosService.getUsuarios().subscribe((response) => {
      this.dataSource = new MatTableDataSource<Usuarios>(response._embedded.usuarios);
    });
    this.rolesService.getRoles().subscribe((response) => {
      this.roles = response._embedded.roles;
    });
  }

  updateUsuario(item: Usuarios){
    this.usuariosForm = item;
  }

  removeUsuario(item: Usuarios){
    this.usuariosService.deleteUsuarios(item).subscribe((response) =>{
      this.loadUsuarios();
    });
  }

  acceptButtonDisabled() {
    let disabled = false;
    if (this.usuariosForm.nombre == undefined ||
      this.usuariosForm.apellidos == undefined){
      disabled = true;
    }else{
      if (this.usuariosForm.nombre.length <= 3 ||
        this.usuariosForm.apellidos.length <= 3){
        disabled = true;
      }
    }
    return disabled;
  }

  reiniciarUsuario(){
    this.usuariosForm = new Usuarios();
  }

  enviarUsuario(){

    //var rol = this.roles.filter( rol => rol.nombre === this.usuariosForm.rol)[0];
    if (this.usuariosForm.password == undefined){
      
      this.usuariosForm.password = this.authService.passwordMd5("everis00");

      console.log("Password:" + this.usuariosForm.password);

    }

    if( this.usuariosForm._links != undefined){
      this.usuariosService.putUsuarios(this.usuariosForm).subscribe((response) =>{
        this.loadUsuarios();
      });
    }else{
      this.usuariosService.postUsuarios(this.usuariosForm).subscribe((response) =>{
        this.loadUsuarios();
      });
    }
  }
}
