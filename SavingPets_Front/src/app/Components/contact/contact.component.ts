import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faFacebookSquare, faInstagram, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { error } from 'protractor';
import { Contact } from 'src/app/Models/Contact';
import { ContactService } from 'src/app/Services/Contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvolope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  contact: Contact;
  message = "";
  showmessage: Boolean = true;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  sendMail(contact: NgForm) {
    this.contactService.getInTouch(contact.value).subscribe(
      (data) => {
        this.showmessage = false;
        this.message = "Email Sended Succefully"
        return data;
      },
      (error) => {
        this.showmessage = false;
        this.message = "Failds !"
        return error;
      }
    );
  }
}

