import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage {

  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert(imageUrl: string) {
    const alert = await this.alertController.create({
      header: 'Felecidades 🎉',
      message: `Hey bien hecho 😊😺`,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ir a la siguiente actividad ^_^',
          handler: () => {
            this.router.navigateByUrl('/color3');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentSimpleAlert() {
    const alert = await this.alertController.create({
      header: '😱😮😥',
      message: 'Te has equivocado, que tal si lo pruebas otra?',
      buttons: ['Repetir 😊']
    });

    await alert.present();
  }
}