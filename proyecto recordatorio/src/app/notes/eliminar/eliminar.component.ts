import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss'],
})
export class EliminarComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() { }

  async alertaEliminacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar nota',
      subHeader: '',
      message: '¿Esta seguro que desea eliminar esta nota?',
      buttons: ['Cancelar', 'Eliminar']
    });
    
    await alert.present();
  }
  
}
