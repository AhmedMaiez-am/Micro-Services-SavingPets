import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminOrUniversiteService implements CanActivate {

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
