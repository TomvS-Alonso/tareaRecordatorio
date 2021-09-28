import { Injectable } from '@angular/core';
import { IUser } from 'src/interfaces/users/IUser';

@Injectable()
export class UserService {
   private usuarios: Array<IUser>;
   constructor(){
       this.usuarios = [
           {
               id: 1,
               nombre: 'prueba1',
               apellido: 'apellido prueba 1',
               contrasena: '1234',
               fechaNacimiento: new Date(),
               usuario: 'prueba1'
           },
           {
               id: 2,
               nombre: 'prueba2',
               apellido: 'apellido prueba2',
               contrasena: '1234',
               fechaNacimiento: new Date(),
               usuario: 'prueba2'
           },
           {
               id: 3,
               nombre: 'prueba3',
               apellido: 'apellido prueba3',
               contrasena: '1234',
               fechaNacimiento: new Date(),
               usuario: 'prueba3'
           },
       ]
   } 

   public iniciarSesion(usuario: string, contrasena: string): IUser | undefined {
        let usuarioEncontrado: IUser | undefined = undefined;
        for(let temporal of this.usuarios){
            if(temporal.usuario === usuario && 
                temporal.contrasena === contrasena){
                usuarioEncontrado = temporal;
                break;
            }
        }
        return usuarioEncontrado;
   }

   
}