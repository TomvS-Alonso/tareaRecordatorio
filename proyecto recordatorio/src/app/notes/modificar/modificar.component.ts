import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INote } from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {

  // definir todo
  public nota: INote;
  public notaId: number;
  public titulo: string;
  public descripcion: string;
  public fechaVencimiento: Date;

  constructor(private servicios: NoteService, private urlID: ActivatedRoute) { }

  ngOnInit() { 
    // obtener id desde la url
    this.notaId = parseInt(this.urlID.snapshot.paramMap.get('id'));
  }

  // modificar la nota
  public notaModificada() {
    // encontrar la nota
    this.nota = this.servicios.buscarNota(this.notaId);
    
    // modificar campos
    this.nota.titulo = this.titulo;
    this.nota.descripcion = this.descripcion;
    this.nota.fechaVencimiento = this.fechaVencimiento;

    // confirmar cambios
    this.servicios.modificarNota(this.notaId, this.nota);
    console.log(this.servicios.obtenerNotas());
  }

}
