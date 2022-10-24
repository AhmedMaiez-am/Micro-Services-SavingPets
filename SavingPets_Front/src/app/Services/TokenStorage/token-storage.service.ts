import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/Models/Event';

const ID = 'Id';
const ROLES = 'Roles';
const TOKEN = 'Token';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  private roles: string[];


  constructor() { }

  public saveId(id: string) {
    window.localStorage.removeItem(ID);
    window.localStorage.setItem(ID, id);
  }

  public getId(): string {
    return localStorage.getItem(ID);
  }

  public saveRoles(roles: string[]) {
    window.localStorage.removeItem(ROLES);
    window.localStorage.setItem(ROLES, JSON.stringify(roles));
  }

  public getRoles(): string[] {
    this.roles = [];

    if (localStorage.getItem(ROLES)) {
      JSON.parse(localStorage.getItem(ROLES)).forEach(authority => {
        this.roles.push(authority.authority)
      });
    }
    return this.roles;
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN);
  }





}

