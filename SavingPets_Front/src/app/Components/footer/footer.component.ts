import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faInstagramSquare, faMailchimp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMailBulk, faPaperPlane, faPhone, faPhoneAlt, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faYoutube = faYoutube
  faFacebook = faFacebookF
  faInstagram = faInstagram
  faSend = faPaperPlane
  faPhone = faPhoneAlt
  faEmail = faEnvelope;
  faLinkedIn = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
