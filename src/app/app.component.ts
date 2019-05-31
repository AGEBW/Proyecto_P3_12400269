import { Component } from '@angular/core';
import {Tarea} from './models/tarea';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareaArray: Tarea[] = [
    {id: 1, tarea: 'proyecto1', materia: 'empresariales'},
    {id: 2, tarea: 'proyecto2', materia: 'empresariales'},
    {id: 3, tarea: 'tareas', materia: 'empresariales'}
  ];

  selectedTarea: Tarea = new Tarea();
  openForEdit( tarea: Tarea) {
    this.selectedTarea = tarea;
  }
  addOrEdit() {
    if (this.selectedTarea.id === 0) {
      //este campo es para insertar
      this.selectedTarea.id = this.tareaArray.length + 1;
      this.tareaArray.push(this.selectedTarea);
    }
    //esto es para actualizar
    this.selectedTarea = new Tarea();
  }
  delete(){
    if (confirm('La tarea ah sido concluida?')) {
      this.tareaArray = this.tareaArray.filter(x => x != this.selectedTarea);
    this.selectedTarea = new Tarea();
    } }
}
