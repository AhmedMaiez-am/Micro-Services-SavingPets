import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/Services/User/alert.service';
import { EventService } from 'src/app/Services/Event/event.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
declare var $: any;
@Component({
  selector: 'app-gestion-event',
  templateUrl: './gestion-event.component.html',
  styleUrls: ['./gestion-event.component.scss']
})
export class GestionEventComponent implements OnInit {

  id: any;
  ListEvent: any;
  closeResult: string;
  hide = true;
  event: any = {};
  cin: any;
  msg = '';
  hidemsg = true;
  form: FormGroup;
  submitted = false;
  title: any;
  Status: any;
  nEvent: any;
  faDel = faTrash;
  faEdit = faEdit;
  
  constructor(
    private modalService: NgbModal,
    private eventService: EventService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getEventByUserId();
    this.countEventByIdUser();
  
  this.form = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  }

  get e() {
    return this.form.controls;
  }


  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.id = localStorage.getItem("Id");
    this.eventService.addEvent(this.form.value, this.id)
      .pipe(first())
      .subscribe(
        data => {
          this.hidemsg = false;
          this.msg = 'Event Added Successfully !'
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  onEdit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.eventService.updateEvent(sessionStorage.getItem("IdEvent"), this.form.value,)
      .pipe(first())
      .subscribe(
        data => {
          this.hidemsg = false;
          this.msg = 'Event Updated Successfully !'
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }


  getEventByUserId() {
    this.id = localStorage.getItem("Id");
    this.eventService.getEventByUserId(this.id).subscribe(
      data => {
        this.ListEvent = data;
        return this.ListEvent;
      }
    );
  }

  countEventByIdUser() {
    this.eventService.countEventByIdUser(localStorage.getItem("Id")).subscribe(
      data => {
        this.nEvent = data;
        return this.nEvent;
      }
    );
  }

  deleteEvent() {
    this.eventService.deleteEvent(sessionStorage.getItem("IdEvent")).subscribe(
      data => {
        return data;
      }
    );
  }


  updateEvent(id: any) {
    this.eventService.updateEvent(id, this.event).subscribe(
      data => {
        this.event = data;
        return this.event;
      }
    );
  }

  SearchEventByTitre() {
    if (this.title != "") {
      this.ListEvent = this.ListEvent.filter(res => {
        return res.title.toLowerCase().match(this.title.toLowerCase());
      });
    }
    else if (this.title == "") {
      this.getEventByUserId();
    }
  }

  setIdThisEvent(id: any) {
    sessionStorage.setItem("IdEvent", id);
  }

  
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  opene(contente) {
    this.modalService.open(contente, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openalert(contentalert) {
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


}

