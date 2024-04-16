import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color7',
  templateUrl: './color7.page.html',
  styleUrls: ['./color7.page.scss'],
})
export class Color7Page {

  constructor(
    public alertController: AlertController,
    private router: Router
  ) { }

  async confirmarRedireccion() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Perderás todo tu progreso 😥',
      buttons: [
        {
          text: 'Quedarme 😊',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Me voy 😮',
          handler: () => {
            this.router.navigate(['/menu']);
          },
        },
      ],
    });

    await alert.present();
  }

}
