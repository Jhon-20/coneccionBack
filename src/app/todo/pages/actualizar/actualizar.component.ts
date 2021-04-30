import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../service/todo.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  tarea: Tarea;
  tarea$ = new Observable<Tarea>();
  descripccionTarea: string;
  constructor(private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 

      this.activatedRoute.params.subscribe((parms) => {
        this.tarea$ = this.todoService.obtenerTareaDetalle(
          +parms['id'].toString()
        );
      });
      this.tarea$.subscribe((res) => {
        this.tarea = res;
        this.descripccionTarea = res.descripcion;
        console.log(this.tarea);
      });
    }
    actualizar() {
      if (this.descripccionTarea) {
        this.tarea.descripcion = this.descripccionTarea;
        this.todoService.actualizarTarea(this.tarea).subscribe(async (res) => {
          await Swal.fire({
            title: 'Correcto',
            text: ' Se modifico la tarea',
            icon: 'success',
          });
          this.regresar();
        });
      } else {
        Swal.fire({
          title: 'Ups!',
          text: ' Ingrese una descripcción para modificar la tarea ',
          icon: 'error',
        });
      }
    }
    regresar() {
      this.router.navigateByUrl('/lista');
    }
  ngOnInit(): void {
  }

}
