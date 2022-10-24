import { Component, OnInit } from '@angular/core';
import { changePassword } from 'src/app/Models/changePassword';
import { TokenStorageService } from 'src/app/Services/TokenStorage/token-storage.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService: UserService, private tokenstorage: TokenStorageService) { }

  id: any = this.tokenstorage.getId();
  user: any = {};
  msg = '';
  showmsg = true;
  hideop = true;
  hidenp = true;
  hidecnp = true;

  ngOnInit(): void {
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

}
