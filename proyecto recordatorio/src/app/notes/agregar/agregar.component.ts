import { Component, OnInit } from '@angular/core';
import { INote, TipoEstado } from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  public titulo: string;
  public descripcion: string;
  public fechaVencimiento: Date;
  public estado: TipoEstado = "ACTIVO";

  constructor(private service:NoteService) { }

  ngOnInit() { }

  public crNote() {
    let nota: INote = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      fechaVencimiento: this.fechaVencimiento,
      estado: this.estado
    }
    this.service.agregarNota(nota)
    console.log(this.service.obtenerNotas())
  }


}
