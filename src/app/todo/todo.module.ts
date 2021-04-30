import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './component/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import {​​MatFormFieldModule}​​ from '@angular/material/form-field';
import {​​ MatInputModule }​​ from '@angular/material/input';
import { ListaComponent } from './component/lista/lista.component';
import {MatListModule} from '@angular/material/list';
import { TodoService } from './service/todo.service';
import { FormsModule } from '@angular/forms';
import {​​MatButtonModule}​​ from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';




@NgModule({
  declarations: [AddComponent, ListaPageComponent, ListaComponent, ActualizarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[
    ListaPageComponent,
    ActualizarComponent

  ],
  providers: [TodoService]
})
export class TodoModule { }
