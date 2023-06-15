import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getParam()
  }

  user = new User;
  _id; string | null = null;

  getParam() {
    this._id = this.activateRouter.snapshot.paramMap.get("id");
    if (this._id) {
      this.UserService.get(this_id0).then(res => {
        this.user = <User>res;
      })
    }
  }
  

}
