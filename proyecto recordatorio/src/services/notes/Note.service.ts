import { Injectable } from '@angular/core';
import { INote } from 'src/interfaces/notes/INote';

@Injectable()
export class NoteService {
    private notes: Array<INote>;

    constructor() {
        // this.notes = Array<INote>();
        this.notes = [
            {
                id: 1,
                titulo: 'nota1',
                descripcion: 'prueba de nota1',
                fechaCreacion: new Date(),
                fechaVencimiento: new Date(),
                estado: "ACTIVO"
            },
            {
                id: 2,
                titulo: 'nota2',
                descripcion: 'prueba de nota2',
                fechaCreacion: new Date(),
                fechaVencimiento: new Date(),
                estado: "ACTIVO"
            },
        ]
    }

    public obtenerNotas(): Array<INote> {
        return this.notes;
    }

    public agregarNota(nuevaNota: INote): INote {
        nuevaNota.id = this.notes.length + 1;
        nuevaNota.fechaCreacion = new Date();
        this.notes.push(nuevaNota);
        return nuevaNota;
    }
    public eliminarNota(id: number) {
        // for(let iterador = 0; iterador< this.notes.length; iterador++){
        //     if(this.notes[iterador].id === id){
        //         this.notes.slice(iterador, 1);
        //         break;
        //     }

        this.notes = this.notes.filter((note) => note.id !== id);
        // this.notes = this.notes.filter(function(note){
        //     return note.id !== id;
        // })
    }
    public modificarNota(id: number, notaM: INote) {
        for (let nota of this.notes) {
            if (nota.id === id) {
                nota.descripcion = notaM.descripcion;
                nota.titulo = notaM.titulo;
                nota.estado = notaM.estado;
                break;
            }
        }
    }
    // funcion para obtener la nota para el modificar
    public buscarNota(id: number): INote {
        let nota: INote = undefined;
        for (let i = 0; i < this.notes.length; i++) {
            if(this.notes[i].id === id) {
                nota = this.notes[i];
            }
        }
        return nota;
    }
}