import { Component } from '@angular/core';

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {

  constructor(private todoService: TodoService) {
  }

  onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  onToggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoService.deleteTodoByID(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}
