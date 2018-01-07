import { Injectable } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthChecker implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        return true;
/*
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { }});

        return false;
*/
    }
}