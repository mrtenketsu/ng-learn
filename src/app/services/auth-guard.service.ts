

import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { AuthService } from "app/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isAuthenticated())
      return true;

    this.router.navigate(['/signin']);
    return false;
  }

}