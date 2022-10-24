import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/Contact/contact.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: any;
  user: any;
  msg = '';
  siteKey: string = "6LfsTZMfAAAAAIY_FlP17PVhGHxBcMohV5Xx8n0p";

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }


  sendEmail(email: NgForm) {
    this.contactService.sendEmail(email.value).subscribe(
      (data) => {
        this.msg = "An email is sent to your address"
        localStorage.setItem("Roles", "MEMBRE")
        return data;
      },
      (error) => {
        this.msg = "FAILED !"
        return error;
      }
    );
  }
}
