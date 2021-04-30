import { Component, DoCheck, Input,EventEmitter, OnInit, Output } from '@angular/core';

import { Tarea } from 'src/app/shared/models/tarea.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, DoCheck{
  @Input() tareas: Tarea[] = [];
  @Output() eliminarTarea = new EventEmitter();
  @Output() actualizarTarea = new EventEmitter();
  tareasTerminadas = 0;
  constructor() { }
   ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.tareasTerminadas = this.tareas?.filter(t => t.hecho).length;
  }

  eliminar(tareaId: number) {
    console.log({tareaId});
    Swal.fire({
      icon: 'warning',
      title: '¿Estas seguro que deseas borrar la tarea ' + tareaId,
      cancelButtonText: 'No borrar',
      confirmButtonText: 'Si, borrar',
      showConfirmButton: true,  
      showCancelButton: true
    }).then( value => {
      if(value.isConfirmed) {
        this.eliminarTarea.emit(tareaId);
      }
    })
    
  }


  selccionar(tarea: Tarea){
    this.tareas.forEach( t =>{
      if(t.id === tarea.id){
        t.hecho = !t.hecho
        this.actualizarTarea.emit(t);
      }
    });
    console.log(this.tareas)
      }

}
