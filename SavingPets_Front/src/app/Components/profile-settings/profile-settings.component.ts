import { Component, OnDestroy, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';
import { faBlog, faEdit, faKey, faImage, faImages } from '@fortawesome/free-solid-svg-icons';
import { changePassword } from 'src/app/Models/changePassword';
import { TokenStorageService } from 'src/app/Services/TokenStorage/token-storage.service';
declare const $: any;

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  id: any = this.tokenstorage.getId();
  user: any = {};
  msg = '';
  showmsg = true;
  errMsg = '';
  showErrMsg = true;
  hideop = true;
  hidenp = true;
  hidecnp = true;
  selectedFile: File = null;
  showupdate = true;
  showchangepwd = false;

  faEdit = faEdit;
  faKey = faKey;
  faImage = faImage;
  faImages = faImages;


  constructor(private tokenstorage: TokenStorageService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.findById();

    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {
      readURL(this);
    });
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#wizardPicturePreview').attr('src', e.target?.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

  }


  findById() {
    this.userService.findById(this.id).subscribe(
      data => {
        this.user = data;
        return this.user;
      }
    );
  }



  changeMDP() {
    let changepassword = new changePassword(this.user.aMdp, this.user.nMdp, this.user.cNMdp)
    this.userService.changeMDP(changepassword, this.id).subscribe(
      data => {
        this.msg = "Password Updated Succefully !"
        this.showmsg = false;
        return data;
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }




}
