
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color2',
  templateUrl: './color2.page.html',
  styleUrls: ['./color2.page.scss'],
})
export class Color2Page {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert(imageUrl: string) {
    const alert = await this.alertController.create({
      header: 'Felecidades 🎉',
      message: `hey pequeño lo as conseguido 😊😺`,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ir a la página de audio',
          handler: () => {
            this.router.navigateByUrl('/audio');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentSimpleAlert() {
    const alert = await this.alertController.create({
      header: '😱😮😥',
      message: 'Te as equivocado, que te parece si lo hacemos de nuevo ?',
      buttons: ['Repetir 😊']
    });

    await alert.present();
  }
}