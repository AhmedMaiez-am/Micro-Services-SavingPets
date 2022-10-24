import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { Authentification } from 'src/app/Models/Authentification';
import { UpdatePassword } from 'src/app/Models/UpdatePassword';
import { changePassword } from 'src/app/Models/changePassword';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const TOKEN = 'Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public baseURL = "http://localhost:9091/User";

  constructor(private userhttp: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem(TOKEN));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /////////////////////////////////IMAGE////////////////////////////////



  ///////////////////////////////////////USER/////////////////////////////////

  signIn(authentification: Authentification) {
    return this.userhttp.post<User>(this.baseURL + "/signin", authentification, httpOptions)
  }

  updateMDP(updatePassword: UpdatePassword): Observable<any> {
    return this.userhttp.put<any>(this.baseURL + "/forgotPassword", updatePassword);
  }

  changeMDP(changepassword: changePassword, id: any) {
    return this.userhttp.put(this.baseURL + "/updateMDP/" + id, changepassword);
  }

  getAllUsers(): Observable<any> {
    return this.userhttp.get(this.baseURL + "/getAll");
  }

  findById(id: any): Observable<User> {
    return this.userhttp.get<User>(this.baseURL + "/getById/" + id);
  }

  deleteUser(id: any): Observable<any> {
    return this.userhttp.delete(this.baseURL + "/delete/" + id);
  }

  updateUser(user: User, id: any): Observable<User> {
    return this.userhttp.put<User>(this.baseURL + "/update/" + id, user);
  }

  // updateProfile(user: User, id: any): Observable<User> {
  //   return this.userhttp.put<User>(this.baseURL + "/updateProfile/" + id, user);
  // }


  //////////////////////////////////////ADMIN////////////////////////////////

  addAdmin(user: User): Observable<User> {
    return this.userhttp.post<User>(this.baseURL + "/signupAdmin", user);
  }

  getAllAdmin(): Observable<any> {
    return this.userhttp.get(this.baseURL + "/getAllAdmin");
  }


  /////////////////////////////////////MEMBRE///////////////////////////


  getAllMembers(): Observable<any> {
    return this.userhttp.get(this.baseURL + "/getAllMembers");
  }

  addMembre(user: User): Observable<User> {
    return this.userhttp.post<User>(this.baseURL + "/signupMembre", user);
  }

  // getCountUniversities(): Observable<any> {
  //   return this.userhttp.get(this.baseURL + "/CountUniversite")
  // }



}
