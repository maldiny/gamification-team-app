import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Usuarios, EmbeddedUsuarios } from "../model/usuarios";
import { Pagination } from '../model/pagination';
import { LocationService } from './location.service';
 
@Injectable()
export class UsuariosService {
   public _embedded: EmbeddedUsuarios;
   public page: Pagination;
   public error;
   public code;
   public message;
   public status;
   constructor(private http: Http,
               private locationService: LocationService) {
   }
 
   getUsuarios(): Observable<UsuariosService> {
      return this.http.get(this.locationService.location + "usuarios")
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   getUsuarioByNombre(usuarios: Usuarios): Observable<UsuariosService> {
      return this.http.get(this.locationService.location + "usuarios/search/searchByNombre?nombre=" + usuarios.nombre)
         .map((response: Response) => response.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

  postUsuarios(usuarios): Observable<UsuariosService>{
    const url = this.locationService.location + "usuarios";

    return this.http.post(url, usuarios)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  putUsuarios(usuarios): Observable<UsuariosService>{
    return this.http.put(usuarios._links.usuarios.href, usuarios)
      .map((response: Response) => response.json())
      .catch(this.error);
  }

  deleteUsuarios(usuarios): Observable<UsuariosService>{
     return this.http.delete(usuarios._links.usuarios.href)
      .map((response: Response) => response.json())
      .catch(this.error);
  }
}