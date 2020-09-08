import { Component, ViewChild } from '@angular/core';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList = [];
  @ViewChild('box') input;
  id = 0;
  dateElement = document.getElementById('date');
  options = { weekday: 'long', month: 'short', day: 'numeric' };
  today = new Date();
  date = this.today.toLocaleDateString('en-US', this.options);
  title = 'todo';

  addTask(task: string) {
    this.taskList.push({
      name: task,
      edit: false,
      done: 'fa-check-circle',
      undone: 'fa-circle-thin',
      trash: false,
      line: ''
    });
    this.input.nativeElement.value = '';
  }
  taskDone(id) {
    this.taskList.forEach(element => {
      if (this.taskList.indexOf(element) === id) {
        if (element.undone === 'fa-circle-thin'){
        element.undone = 'fa-check-circle';
        element.line = 'lineThrough';
        }
        else{
        element.undone = 'fa-circle-thin';
        element.line = '';

        }
      }
    });
  }

  deleteTask(id) {
    this.taskList.forEach(element => {
      if (this.taskList.indexOf(element) === id) {
        this.taskList.splice(id, 1);
      }
    });
  }

  editTask(id){
    this.taskList.forEach(element => {
      if (this.taskList.indexOf(element) === id) {
        element.edit = true;
      }
    });
  }
  editNewTask(task: string, i){
    this.taskList[i].name = task;
    this.taskList[i].edit = false;
  }
}
