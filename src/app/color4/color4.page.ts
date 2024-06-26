import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-color4',
  templateUrl: './color4.page.html',
  styleUrls: ['./color4.page.scss'],
})
export class Color4Page {

  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert(imageUrl: string) {
    const alert = await this.alertController.create({
      header: 'Felecidades 🎉',
      message: `Hey bien hecho 😎`,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ir a la siguiente actividad ^_^',
          handler: () => {
            this.router.navigateByUrl('/color5');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentSimpleAlert() {
    const alert = await this.alertController.create({
      header: '😱😮😥',
      message: 'Te has equivocado, que tal si lo pruebas otra vez ?',
      buttons: ['Repetir 😊']
    });

    await alert.present();
  }
  
  async confirmarRedireccion() {
    const alert = await this.alertController.create({
      header: 'Hey estas seguro ?',
      message: 'Perderas todo tu progreso 😥',
      buttons: [
        {
          text: 'Quedarme 😊',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Me voy 😮',
          handler: () => {
            // Redirigir a otra página al seleccionar "Sí"
            this.router.navigate(['/menu']);
          },
        },
      ],
    });

    await alert.present();
  }
}
