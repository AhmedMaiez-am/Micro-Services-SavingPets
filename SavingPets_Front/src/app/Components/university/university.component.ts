import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  nFiliere: any;
  nEnseignant: any;
  nClubs: any;
  nSalle: any;
  nMatiere: any;

  id: any;
  showcalendar = false;

  constructor( private userservice: UserService) { }

  ngOnInit(): void {

  }


}
