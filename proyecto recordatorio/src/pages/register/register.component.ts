import { Component } from "@angular/core";
import { IUser } from "src/interfaces/users/IUser";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {
    public usuario: IUser = {
        apellido: '',
        contrasena: '',
        fechaNacimiento: new Date(),
        nombre: '',
        usuario: ''
    }
    constructor(){

    }
    // metodos custom
    mostrarConsola(){
        console.log(this.usuario);
    }

}