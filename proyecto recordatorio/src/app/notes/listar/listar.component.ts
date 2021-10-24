import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/services/notes/Note.service';
import { AlertController } from '@ionic/angular';
import { INote } from 'src/interfaces/notes/INote';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {

  // definir la array de las notas
  notas: Array<INote>; 

  constructor(public alertController: AlertController, private servicios: NoteService) { }
 
  // llamando a las notas
  ngOnInit() {
    this.notas = this.servicios.obtenerNotas();
  }

  // aviso de eliminacion de nota
  async alertaEliminacion(id:number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar nota',
      subHeader: '',
      message: '¿Esta seguro que desea eliminar esta nota ?',
      buttons: ['Cancelar', 
      {
        text: 'Eliminar',
        handler: () => {
          this.servicios.eliminarNota(id);
        }
      }]
    });

    await alert.present();
  }
  
  



}
