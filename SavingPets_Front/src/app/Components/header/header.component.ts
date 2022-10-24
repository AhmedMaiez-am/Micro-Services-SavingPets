import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideLogin: boolean = false;
  hideLogout: boolean = true;
  profileImage: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.showInOut();
    this.profileImage = localStorage.getItem("profileImage");
  }

  showInOut() {
    if (localStorage.length > 2) {
      this.hideLogin = true;
      this.hideLogout = false;
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/home/login"])
  }
}
