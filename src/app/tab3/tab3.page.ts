
import { Component } from '@angular/core';
import { User } from '../model/user';
import { AlertController } from '@ionic/angular';
import { Produto } from '../model/produtos';
import { ProdutoService } from '../services/user-service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
alertButtons: any;
  userService: any;

constructor(private alertController: AlertController) {}

  
  produto = new Produto()
  
  
  async presentAlert(tipo: string, texto:string) {

    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });
  
    await alert.present();
  }
  
  save() {
    this.userService.add(this.produto);
    this.presentAlert("Aviso", "Cadastrado");
    console.log(this.produto); 
  
  
  }
}
