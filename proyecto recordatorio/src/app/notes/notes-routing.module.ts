import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: '',
    component: ListarComponent,
  },
  {
    path: 'modificar/:id',
    component: ModificarComponent
  },
  {
    path: 'eliminar/:id',
    component: EliminarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
