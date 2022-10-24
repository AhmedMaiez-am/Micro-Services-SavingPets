import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { EventService } from 'src/app/Services/Event/event.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';
import { faHeart, faTrash, faComment, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: any;
  id: any;
  idUser = localStorage.getItem("Id");
  user: any;
  faHeart = faHeart;
  faTrash = faTrash;
  faThumbsUp = faThumbsUp;



  hamClick: boolean

  hamburgerClick(){
    this.hamClick = !this.hamClick;
  }
  constructor(private eventService: EventService, private renderer: Renderer2 , private userservice: UserService) { }

  ngOnInit(): void {
    this.getEventById();
    this.findUserById(localStorage.getItem("Id"));


  }

  findUserById(id: any) {
    this.id = localStorage.getItem("Id");
    this.userservice.findById(this.id).subscribe(
      data => {
        this.user = data;
        return this.user;
      }
    )
  }
  getEventById() {
    this.id = sessionStorage.getItem("IdEvent")
    this.eventService.getEventById(this.id).subscribe(
      data => {
        this.event = data;
        return this.event;
      }
    )
  }

  
  
}
