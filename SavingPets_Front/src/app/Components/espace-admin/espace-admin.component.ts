import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/Services/User/alert.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.scss']
})
export class EspaceAdminComponent implements OnInit {

  listUniversities: any;
  nUniversities: any;
  hideUniversite = true;
  closeResult: string;
  form: FormGroup;
  submitted = false;
  nom: string;
  msg = '';
  hidemsg = true;
  faTrash = faTrash;

  constructor(private modalService: NgbModal, private userservice: UserService, private router: Router, private formBuilder: FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
    if (localStorage.getItem("Roles").includes("ADMINISTRATEUR")) {
      this.hideUniversite = false;
    }
    this.getAllUniversities();

    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      titre: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      cin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,4}")]],
      dateNaissance: ['', Validators.required],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      confirmMdp: ['', [Validators.required, Validators.minLength(6)]],
      paye: ['', Validators.required],
    });
  }

  active: boolean;
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.userservice.addMembre(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.hidemsg = false;
          this.msg = "University Added Succeffuly !"
          return data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  getAllUniversities() {
    this.userservice.getAllMembers().subscribe(
      data => {
        this.listUniversities = data;
        return this.listUniversities;
      }
    )
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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



 

  deleteUniversite() {
    this.userservice.deleteUser(sessionStorage.getItem("IdUniversite")).subscribe(
      data => {
        return data;
      }
    )
  }
}
