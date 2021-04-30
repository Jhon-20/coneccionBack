import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Tarea } from 'src/app/shared/models/tarea.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() update = new EventEmitter()
  constructor(private todoService:  TodoService) { }
  tareaDescripcion:string = '';
  ngOnInit(): void {
  }
  agregarTarea() {
    const tarea: Tarea = {
      id: this.todoService.generarId(),
      descripcion: this.tareaDescripcion,
      hecho: false
    }
    this.todoService.agrgarTarea(tarea)
         .subscribe((res) =>{
         Swal.fire({
           title:'Correcto',
           text:'Se agrego tarea nueva' + res.id,
           icon:'success'
         }).then(() => {
          this.update.emit();
          this.tareaDescripcion ='';
         });
     
         },
         err =>{
          Swal.fire({
            title:'Upss',
            text:'Algo malo sucedio',
            icon:'error'
          });
         }
         
         );
    this.update.emit();
  }
}
