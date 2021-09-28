import { Component } from "@angular/core";
import { Route } from "@angular/router";
import { IUser } from "src/interfaces/users/IUser";
import { UserService } from "src/services/users/User.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private userService: UserService;
    private route: Route;
    public usuario: string;
    public contrasena: string;
    constructor(servicio: UserService){
        this.userService = servicio;
        
    }

    // custom
    iniciarSesion(){
        const retorno: IUser | undefined = this.userService.iniciarSesion(
            this.usuario, 
            this.contrasena
        );
        if(retorno === undefined){
            alert('Usuario no existe :(');
        }else{
            alert(`Hola ${retorno.nombre}`);
        }
        // console.log({
        //     contrasena: this.contrasena,
        //     usuario: this.usuario
        // });
    }

}