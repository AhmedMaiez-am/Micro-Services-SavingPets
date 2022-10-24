import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../User/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdministrateurService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem("Roles").includes("MEMBRE") ||
  
      localStorage.length < 2) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
