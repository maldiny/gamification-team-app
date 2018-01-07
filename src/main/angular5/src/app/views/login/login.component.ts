import { UsuariosService } from '../../services/usuarios.service';

import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import $ from 'jquery';
import { MatTableDataSource } from '@angular/material';
import { Usuarios } from '../../model/usuarios';
import { CdkTableModule } from '@angular/cdk/table';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  public usuariosForm = new Usuarios();

  public newUserForm;

  public errorMessage;

  public datasource = new MatTableDataSource<Usuarios>();

  constructor(private usuariosService: UsuariosService,
              private authService: AuthService){
    this.newUserForm = false;
    this.errorMessage = "";
    localStorage.removeItem('currentUser');
  }

  loginButtonDisabled() {
    let disabled = false;
    if (this.usuariosForm.nombre == undefined ||
      this.usuariosForm.password == undefined){
      disabled = true;
    }else{
      if (this.usuariosForm.nombre.length <= 3 ||
        this.usuariosForm.password.length <= 3){
        disabled = true;
      }
    }
    return disabled;
  }

  registroButtonDisabled() {
    let disabled = false;
    if (this.usuariosForm.nombre == undefined ||
      this.usuariosForm.password == undefined ||
      this.usuariosForm.apellidos == undefined){
      disabled = true;
    }else{
      if (this.usuariosForm.nombre.length <= 3 ||
        this.usuariosForm.password.length <= 3 ||
        this.usuariosForm.apellidos.length <= 3){
        disabled = true;
      }
    }
    return disabled;
  }

  login(){

    this.errorMessage = this.authService.login(this.usuariosForm, this.errorMessage);

  }

  registro(){
    this.usuariosService.getUsuarioByNombre(this.usuariosForm).subscribe((response) =>{

      if(response._embedded.usuarios == undefined || 
        response._embedded.usuarios.length == 0){
      
        console.log("not found user " + this.usuariosForm.nombre);
        let nuevoUsuario = new Usuarios();
        nuevoUsuario.nombre = this.usuariosForm.nombre;
        nuevoUsuario.apellidos = this.usuariosForm.apellidos;
        nuevoUsuario.password = this.authService.passwordMd5(this.usuariosForm.password);

        console.log(nuevoUsuario.password + '----' + this.usuariosForm.password);

        this.usuariosService.postUsuarios(nuevoUsuario).subscribe((response) =>{
          this.login();
        });


      }else{
        this.errorMessage = "El usuario " + this.usuariosForm.nombre + " ya existe.";
      }

    });

  }

  registerForm(event){
    console.log(event.checked);
  }


}
