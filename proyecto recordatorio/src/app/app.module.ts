import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { NoteComponent } from 'src/pages/note/note.component';
import { RegisterComponent } from 'src/pages/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/services/users/User.service';
import {  RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent,
     LoginComponent, 
     MainComponent, 
     NoteComponent,
     RegisterComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
