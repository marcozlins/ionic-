import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  alert(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private alertController: AlertController
  ) { }

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
