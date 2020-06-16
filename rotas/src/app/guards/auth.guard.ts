import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

    return this.verificarAcesso();
  }

  private verificarAcesso() {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }
}
