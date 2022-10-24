import { Component, OnDestroy, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';
import { faFlag, faMapMarker, faUniversity, faCalendar, faInfoCircle, faBrain, faObjectGroup, faEnvelope,faPhone, faIdCard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  date = new Date().getUTCFullYear();
  nextYears = parseInt((this.date).toString()) + 1
  id: any = null;
  user: User = null;
  selected: string = '';

  faFlag = faFlag;
  faMapMarker = faMapMarker;
  faUniversity = faUniversity;
  faCalendar = faCalendar;
  faInfoCircle = faInfoCircle;
  faBrain = faBrain;
  faObjectGroup = faObjectGroup;
  faEnvelope = faEnvelope;
  faPhone=faPhone;
  faIdCard=faIdCard;
  constructor(private router: Router, private activateRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.findUserById();

  }

  findUserById() {
    this.id = localStorage.getItem("Id");
    this.userService.findById(this.id).subscribe(data => {
      this.user = data;
    
      return this.user;
    })
  }
}
