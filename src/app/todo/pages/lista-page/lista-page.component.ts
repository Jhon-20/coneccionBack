import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  tareas = new Observable<Tarea[]>();
  tarea: Tarea[] = []
  constructor(private todoService: TodoService) { 
this.obtenerTareas();
}
  ngOnInit(): void {
  }
  obtenerTareas() {
    this.tareas = this.todoService.obtenerTarea(),
    err=> alert('No se pudieron cargar las tareas')
  }
eliminarTarea(tareaId:number){
  this.todoService.eliminarTarea(tareaId)
                  .subscribe(res => {
                    console.log({res})
                    this.obtenerTareas();
   })
}
actualizarTarea(tarea: Tarea){
  this.todoService.actualizarTarea(tarea)
  .subscribe( res => {
    console.log('se actualizo la tarea');
  })
}
}
