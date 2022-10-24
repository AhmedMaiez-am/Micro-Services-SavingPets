import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBlogger, faBloggerB, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faCalendar, faCircle, faCoffee, faFlag, faNewspaper, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faCoffee = faCoffee;
  faUser = faUser;
  faFacebook = faFacebook;
  faCalendar = faCalendar;
  faDoc = faNewspaper;
  faBlog = faBloggerB;
  faInterested = faFlag;
  faCog = faCog;
  hidemembers = true;
  hidefiliere = true;
  id: any = null;
  user: User = null;
  listMembre: any;
  membre: any;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.findUserById();
    this.AdminOrMembre();

  }

  findUserById() {
    this.id = localStorage.getItem('Id');
    this.userService.findById(this.id).subscribe(data => {
      this.user = data;
      return this.user;
    });
  }

  AdminOrMembre() {
    if (localStorage.getItem("Roles").includes("ADMINISTRATEUR")) {
      this.hidemembers = false;
    }
    if (localStorage.getItem("Roles").includes("MEMBRE")) {
      this.hidefiliere = false;
    }
  }



  getAllMembers() {
    this.userService.getAllMembers().subscribe(
      data => {
        this.listMembre = data;
        return this.listMembre;
      }
    )
  }

  getMembreById() {
    this.userService.findById(sessionStorage.getItem("IdMembre")).subscribe(
      data => {
        this.membre = data;
        return this.membre;
      }
    )
  }

  setIdMembre(id: any) {
    sessionStorage.setItem("IdMembre", id);
  }


}

