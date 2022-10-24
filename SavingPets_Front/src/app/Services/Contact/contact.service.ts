import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/app/Models/Contact';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   baseURL = "http://localhost:9091/Contact";

  constructor(private router: Router, private contacthttp: HttpClient) { }

  getInTouch(contact: Contact): Observable<any>{
    return this.contacthttp.post(this.baseURL, contact).pipe(data =>{
      return data;
    })
  };

  sendEmail(email: any): Observable<any>{
    return this.contacthttp.post(this.baseURL + "/send", email).pipe(data =>{
      return data;
    })
  };
}

