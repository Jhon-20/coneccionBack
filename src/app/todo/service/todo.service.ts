import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
tareas: Tarea[] = []
url = environment.apiUrl + environment.endpoints.tareas;
  constructor(private http:HttpClient) { }
  agrgarTarea(tarea:Tarea){
    //const url=environment.apiUrl + environment.endpoints.tareas
   //return this.http.post(url,tarea);
   return this.http.post<Tarea>(this.url, tarea); 
  }
  obtenerTarea(){
    //const url=environment.apiUrl + environment.endpoints.tareas
    //return this.http.get<Tarea[]>(url);
    return this.http.get<Tarea[]>(this.url);
  }
    generarId() {​​
      return parseInt((Math.random() * 10000000000).toString());     
  }
  eliminarTarea(tareaId: number){
  //  const url=`${environment.apiUrl} + ${environment.endpoints.tareas}/${tareaId}` ;
   // return this.http.delete(url);
   const url = `${this.url}/${tareaId}`;
   return this.http.delete(url);
  }
  obtenerTareaDetalle(id: number) {
    const url = this.url;
    return this.http.get<Tarea>(`${url}/${id}`);
  }

  actualizarTarea(tarea: Tarea) {
    return this.http.put(`${this.url}/${tarea.id}`, tarea);
  }
}
