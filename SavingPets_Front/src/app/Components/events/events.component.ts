import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/Event/event.service';

import { faThumbsUp, faThumbsDown, faTrash, faComment, faPlusCircle, faClosedCaptioning, faSlash } from '@fortawesome/free-solid-svg-icons';
import { Event } from 'src/app/Models/Event';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/Services/User/alert.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  id: any;
  ListEvent: any;
  titre: string;
  date: string;
  user: string;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrash = faTrash;
  nEvents: any;
  hideformevent = true;
  event: any = {};
  selectedFile: File = null;
  hideimage = true;
  hideform = false;
  showmsg = true;
  msg = '';
  closeResult: string;
  faAdd = faPlusCircle;
  style1: string;
  isOpened: boolean;
  toggleStyle: string;
  faClose = faSlash
  constructor(private modalService: NgbModal,
    private eventservice: EventService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) { }


  ngOnInit(): void {
    this.getAllEvents();
    this.hideSupp(this.id);
    this.hideFormEvent();
  }
  toggle() {
    this.style1 = "flex";
    // this.style2="none";
    this.isOpened = true;
    this.toggleStyle = "flex";

  }
  closeNote() {
    this.style1 = "none"
    this.isOpened = false;
  }
  openalert(contentalert: any) {
    this.modalService.open(contentalert, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getAllEvents() {
    this.eventservice.getAllEvent().subscribe(
      data => {
        this.ListEvent = data;
        this.nEvents = this.ListEvent.length;
        return this.ListEvent;
      }
    )
  }

  setEventId(id: any) {
    sessionStorage.setItem("IdEvent", id);
  }

  SearchEventByTitre() {
    if (this.titre != "") {
      this.ListEvent = this.ListEvent.filter(res => {
        return res.titre.toLowerCase().match(this.titre.toLowerCase());
      });
    }
    else if (this.titre == "") {
      this.getAllEvents();
    }
  }

  SearchEventByDate() {
    if (this.date != "") {
      this.ListEvent = this.ListEvent.filter(res => {
        return res.date.toLowerCase().match(this.date.toLowerCase());
      });
    }
    else if (this.date == "") {
      this.getAllEvents();
    }
  }

  deleteEvent() {
    this.eventservice.deleteEvent(sessionStorage.getItem("IdEvent")).subscribe(
      data => {
        return data;
      }
    );
  }

  hideSupp(id: any) {
    if (id == localStorage.getItem("Id")) {
      return false
    } else {
      return true
    }
  }


  hideFormEvent() {
    if (localStorage.getItem("Roles").includes("ADMINISTRATEUR") || localStorage.getItem("Roles").includes("MEMBRE")) {
      this.hideformevent = false;
    }
  }

  addEvent(event: Event) {
    this.id = localStorage.getItem("Id")
    this.eventservice.addEvent(event, this.id).subscribe(
      data => {
        event = data;
        this.hideform = true;
        this.hideimage = false;
        sessionStorage.setItem("IdEvent", event._id)
        return event;
      }
    )
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  addImage() {
    this.id = sessionStorage.getItem("IdEvent");
    const file = new FormData();
    file.append('image', this.selectedFile, this.selectedFile.name)
    console.log(file);
    this.eventservice.addImage(file, this.id).subscribe(
      data => {
        this.showmsg = false;
        this.msg = "Enjoy ! "
        return data;
      });
  }

}

