import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Usuarios, EmbeddedUsuarios } from "../model/usuarios";
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {

   private usuario: Usuarios;

   constructor(private http: Http,
               private usuariosService: UsuariosService,
               private router: Router) {
     
     this.isCurrentUserFromLocalStorage();

   }

   isCurrentUserFromLocalStorage(): Boolean{
       if (localStorage.getItem('currentUser')) {
         
         this.usuario = JSON.parse(localStorage.getItem('currentUser'));
         console.log("isCurrentUserFromLocalStorage" + this.usuario);

         return true;

       }

       return false; 

    }
 
   login(usuariosForm: Usuarios, errorMessage: string): string{

    this.usuariosService.getUsuarioByNombre(usuariosForm).subscribe((response) =>{

      if(response._embedded.usuarios == undefined || 
        response._embedded.usuarios.length == 0){

        console.log("El usuario " + usuariosForm.nombre + " no existe.");

        return errorMessage = "El usuario " + usuariosForm.nombre + " no existe.";

      }else{

        let formPassword = this.passwordMd5(usuariosForm.password);
        let databasePassword = response._embedded.usuarios[0].password;

        console.log(formPassword + "-" + databasePassword);

        if( formPassword === databasePassword ){

          localStorage.setItem('currentUser', JSON.stringify(response._embedded.usuarios[0]));
          this.usuario = response._embedded.usuarios[0];
          
          this.router.navigate(['ranking']);

        }else{

          console.log("Password incorrecto.");
          return errorMessage = "Password incorrecto.";

        }
      
      }
    });

    return errorMessage;
  }

  passwordMd5(password: string): string {
    return "" + Md5.hashStr(password);
  }

  getUsuario(): Usuarios{
    return this.usuario;
  }
}