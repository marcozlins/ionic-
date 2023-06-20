import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
  ) { }

  users: User[] = [];

  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.userService.list().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.users = <User[]>res;
    //   })
    this.userService.list()
      .then(res => {
        console.log(res)
        this.users = <User[]>res;
      })
  }

  edit(id: string) {
    this.router.navigate(['/tabs/userForm', id],)
  }

  handleRefresh(event: any) {
    // setTimeout(() => {
    //   // Any calls to load data go here
    //   event?.target?.complete();
    // }, 2000);
    this.userService.list()
      .then(res => {
        console.log(res)
        this.users = <User[]>res;
      })
      .catch()
      .finally(() => {
        event?.target?.complete();
      })
  }

  async remove(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirme',
      //subHeader: 'Important message',
      message: 'Deseja apagar o registro?',
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.removeUser(id);
          },
        }, {
          text: 'Não',
          role: 'cancel',
          handler: () => {
          },
        }
      ],
    });
    await alert.present();
  }

  removeUser(id: string) {
    this.userService.delete(id)
      .then(res => {
        this.getList();
      });
  }
}