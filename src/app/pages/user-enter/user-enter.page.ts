import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { error } from 'console';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user-enter',
  templateUrl: './user-enter.page.html',
  styleUrls: ['./user-enter.page.scss'],
})
export class UserEnterPage implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private util: UtilsService
  ) { }

  ngOnInit() {
  }

  email: string = "";
  senha: string = "";

  async enter() {
    await this.userService.login(this.email, this.senha)
    .then(res => {
        console.log(res);
        this.router.navigate([''])
      })
      .catch(erro => {
        console.error(error);
        this.util.alert("Error", "Usuário ou dados inválidos!")
      })
  }

  async enterGoogle() {
    await this.userService.loginGoogle().then(res => {
      console.log(res);

      this.userService.addUser(<User>{
        email: res.user.email,
        foto: res.user.photoURL,
        nome: res.user.displayName,
        telefone: res.user.phoneNumber
      },
      res.user.uid)
      .then(resUserAdd => {
        this.router.navigate(["/"]);
      })
    })
    .catch(erro => {
      console.error(erro);
      this.util.alert("Error", "Usuário ou inváidos!")
    })
  }

}
